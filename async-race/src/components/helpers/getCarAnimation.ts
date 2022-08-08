import {
  btnCreateCar,
  btnGenerate100Car,
  btnNextGarage,
  btnPrevGarage,
} from '../constants/constantsDOM';
import Loader from '../controller/loader';
import {
  Animate,
  CarControl,
  CarWinner,
  StartDriving,
} from '../interface/interface';

export function trackElements(id: number): CarControl {
  const carContainer = document.querySelector(`[data-car='${id}']`) as HTMLElement;
  const startBtn = carContainer.querySelector(`[data-start='${id}']`) as HTMLButtonElement;
  const stopBtn = carContainer.querySelector(`[data-stop='${id}']`) as HTMLButtonElement;
  const car = carContainer.querySelector(`[data-id='${id}']`) as HTMLElement;
  const btnRemove = carContainer.querySelector('.btn-remove') as HTMLButtonElement;
  const btnSelect = carContainer.querySelector('.btn-select') as HTMLButtonElement;
  return {
    startBtn, stopBtn, car, btnRemove, btnSelect,
  };
}

function buttonsOff() {
  btnNextGarage.disabled = true;
  btnPrevGarage.disabled = true;
  btnCreateCar.disabled = true;
  btnGenerate100Car.disabled = true;
}

function buttonsOn() {
  btnCreateCar.disabled = false;
  btnGenerate100Car.disabled = false;
  (document.querySelector('.btn-reset') as HTMLButtonElement).disabled = false;
}

function getAnimationCar(car: HTMLElement, distance: number, timeOfAnimation: number) {
  let start = 0;
  const state: Animate = {};
  function animate(timestamp: number) {
    if (!start) {
      start = timestamp;
    }
    const timeFraction = timestamp - start;
    const progress = Math.round(timeFraction * (distance / timeOfAnimation));
    car.style.transform = `translateX(${Math.min(progress, distance)}px)`;
    if (progress < distance) {
      state.idAnimate = window.requestAnimationFrame(animate);
    }
  }
  state.idAnimate = window.requestAnimationFrame(animate);
  return state;
}

export async function startDriving(id: number, btn?: boolean) {
  if (btn) {
    buttonsOff();
  }
  const {
    startBtn, stopBtn, car, btnRemove, btnSelect,
  } = trackElements(id);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  btnRemove.disabled = true;
  btnSelect.disabled = true;
  const { velocity, distance } = await new Loader().switchEngine(id, 'started');
  const time = Math.round(distance / velocity);
  const htmlDistanse = (document.querySelector('.car-track') as HTMLElement).offsetWidth;
  const CarID = getAnimationCar(car, htmlDistanse, time);
  const { success } = await new Loader().drive(id);
  if (!success) {
    window.cancelAnimationFrame(CarID.idAnimate);
  }
  return { success, id, time };
}

export async function stopDriving(id: number) {
  const {
    startBtn, stopBtn, car, btnRemove, btnSelect,
  } = trackElements(id);
  await new Loader().switchEngine(id, 'stopped');
  window.cancelAnimationFrame(id);
  car.style.transform = '';
  startBtn.disabled = false;
  stopBtn.disabled = true;
  btnRemove.disabled = false;
  btnSelect.disabled = false;
}

async function getAWinner(
  promises: Promise<StartDriving>[],
  indexes: number[],
): Promise<CarWinner> {
  const { success, id, time } = await Promise.race(promises);
  if (!success) {
    const indexFailed = indexes.findIndex((i) => i === id);
    const restOfPromises = [...promises.slice(0, indexFailed),
      ...promises.slice(indexFailed + 1, promises.length)];
    const restOfIndexes = [...indexes.slice(0, indexFailed),
      ...indexes.slice(indexFailed + 1, indexes.length)];
    return getAWinner(restOfPromises, restOfIndexes);
  }
  return { ...await new Loader().getCar(id), time: +(time / 1000).toFixed(2) };
}

export function getCarsIdOnThePage(): number[] {
  const arrCarsId: number[] = [];
  const currentCars = document.querySelectorAll('.car');
  currentCars.forEach((el) => arrCarsId.push(Number((el as HTMLElement).dataset.id)));
  return arrCarsId;
}

function getMessageAboutTheWinner(carName: string, carTime: number): void {
  const modalWindow = document.querySelector('.text-modal') as HTMLParagraphElement;
  modalWindow.innerHTML = `${carName} went first (${carTime})`;
  (document.querySelector('.overlay') as HTMLParagraphElement).classList.remove('hide');
  document.body.classList.add('open');
}

export async function raceCars(): Promise<CarWinner> {
  const currentCarsId = getCarsIdOnThePage();
  const promises = currentCarsId.map((id) => startDriving(id, true));

  Promise.all(promises).then(() => {
    buttonsOn();
  });

  const winner = await getAWinner(promises, currentCarsId);

  getMessageAboutTheWinner(winner.name, winner.time);

  return winner;
}
