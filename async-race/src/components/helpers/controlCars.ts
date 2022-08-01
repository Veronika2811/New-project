import { Loader } from '../controller/loader';

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
}

export async function stopDriving(id: number) {
  const { startBtn, stopBtn, car } = trackElements(id);
  stopBtn.disabled = true;
  await new Loader().switchEngine(id, 'stopped');
  startBtn.disabled = false;
  car.style.animationName = 'none';
  car.style.animationDuration = 'initial';
}

export function getCarsOnThePage() {
  const arrCarsId: number[] = [];
  const currentCars = document.querySelectorAll('.car');
  currentCars.forEach((el) => arrCarsId.push(Number((el as HTMLElement).dataset.id)));
  return arrCarsId;
}