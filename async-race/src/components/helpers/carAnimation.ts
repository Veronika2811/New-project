import { Loader } from '../controller/loader';
import { Car, StartDriving } from '../interface/interface';

export function trackElements(id: number) {
  const startBtn = document.querySelector(`[data-start='${id}']`) as HTMLButtonElement;
  const stopBtn = document.querySelector(`[data-stop='${id}']`) as HTMLButtonElement;
  const car = document.querySelector(`[data-id = '${id}']`) as HTMLElement;
  return { startBtn, stopBtn, car };
}

export async function startDriving(id: number) {
  const { startBtn, stopBtn, car } = trackElements(id);
  startBtn.disabled = true;
  const { velocity, distance } = await new Loader().switchEngine(id, 'started');
  const time = Math.round(distance / velocity );
  car.style.animationName = 'car-animation';
  car.style.animationDuration = `${time.toString()}ms`;
  const { success } = await new Loader().drive(id);
  if (!success) {
    car.style.animationPlayState = 'paused';
  }
  stopBtn.disabled = false;
  return { success, id, time };
}

export async function stopDriving(id: number) {
  const { startBtn, stopBtn, car } = trackElements(id);
  stopBtn.disabled = true;
  await new Loader().switchEngine(id, 'stopped');
  startBtn.disabled = false;
  car.style.animationName = 'none';
  car.style.animationDuration = 'initial';
}

async function getAWinner(promises: Promise<StartDriving>[], indexes: number[]): Promise<Car> {
  const { success, id, time } = await Promise.any(promises);
  if (!success) {
    const indexFailed = indexes.findIndex((i) => i === id);
    const restOfPromises = [...promises.slice(0, indexFailed), ...promises.slice(indexFailed + 1, promises.length)];
    const restOfIndexes = [...indexes.slice(0, indexFailed), ...indexes.slice(indexFailed + 1, indexes.length)];
    return getAWinner(restOfPromises, restOfIndexes);
  }
  return { ...await new Loader().getCar(id), time: +(time / 1000).toFixed(2) };
}

export function getCarsOnThePage() {
  const arrCarsId: number[] = [];
  const currentCars = document.querySelectorAll('.car');
  currentCars.forEach((el) => arrCarsId.push(Number((el as HTMLElement).dataset.id)));
  return arrCarsId;
}

export async function raceCars() {
  const currentCarsId = getCarsOnThePage();
  const promises = currentCarsId.map((id) => startDriving(id));
  
  const winner = await getAWinner(promises, currentCarsId);
  return winner;
}