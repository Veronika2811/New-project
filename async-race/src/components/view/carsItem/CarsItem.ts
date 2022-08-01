import './carsItem.scss';
import createButton from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { Car } from '../../interface/interface';
import getCar from '../../helpers/getCar';
import { Loader } from '../../controller/loader';
import { countTotal, currentPage } from '../containerGarageTitle/ContainerGarageTitle';
import { carNameUpdate, carColorUpdate, btnUpdateCar } from '../controlButtons/controlButtons';
import { btnNext, btnPrev, pageNum } from '../pagination/pagination';
import loadPagination from '../../helpers/paginationLoad';
import trackElements from '../../helpers/trackElements';

export let countTotalNum: number;

export class CarsItem {

  carsItem!: HTMLElement;

  carsWrapper!: HTMLElement;

  line!: HTMLElement;

  carButtons!: HTMLElement;

  selectBtn!: HTMLElement;

  removeBtn!: HTMLElement;

  carName!: HTMLElement;

  highway!: HTMLElement;

  engineButtons!: HTMLElement;

  carBtnA!: HTMLButtonElement;

  carBtnB!: HTMLButtonElement;

  car!: HTMLElement;

  imageCar!: string;

  loader = new Loader();

  numberPage;

  countTotal = countTotal;

  currentPage = currentPage;

  carNameUpdate = carNameUpdate;
  
  carColorUpdate = carColorUpdate;

  btnUpdateCar = btnUpdateCar;

  cars;

  btnNext = btnNext;

  btnPrev = btnPrev;

  carTrack!: HTMLElement;

  constructor(cars: HTMLElement, numberPage: number) {
    this.cars = cars;
    this.numberPage = numberPage;
    this.createCars();
  }

  createCar(data: Car) {
    this.carsItem = createDomNode('div', ['cars-item'], this.cars);

    this.carsWrapper = createDomNode('div', ['cars-wrapper'], this.carsItem);
    this.line = createDomNode('div', ['line'], this.carsItem);

    this.carButtons = createDomNode('div', ['car-buttons'], this.carsWrapper);
    this.selectBtn = createButton(['btn', 'white', 'btn-select'], 'select', this.carButtons);
    this.selectBtn.addEventListener('click', () => this.selectCar((data.id) as number, data.color, data.name));
    this.removeBtn = createButton(['btn', 'white', 'btn-remove'], 'remove', this.carButtons);
    this.removeBtn.addEventListener('click', () => this.removeCar((data.id) as number));

    this.carName = createDomNode('span', ['car-name'], this.carButtons, `${data.name}`);

    this.highway = createDomNode('div', ['highway'], this.carsWrapper);

    this.engineButtons = createDomNode('div', ['engine-buttons'], this.highway);

    this.carBtnA = createButton(['btn-engine', 'btn-start'], 'A',  this.engineButtons, [{ 'data-start': `${data.id}` }]);
    this.carBtnA.addEventListener('click', () => this.startDriving(Number(`${data.id}`)));

    this.carBtnB = createButton(['btn-engine', 'btn-stop'], 'B',  this.engineButtons, [{ 'disabled': 'true' }, { 'data-stop': `${data.id}` }]);
    this.carBtnB.addEventListener('click', () => this.stopDriving(Number(`${data.id}`)));

    this.carTrack = createDomNode('div', ['car-track'], this.highway);
    this.car = createDomNode('div', ['car'], this.carTrack);
    this.car.setAttribute('data-id', `${data.id}`);

    this.imageCar = getCar(`${data.color}`);
    this.car.innerHTML = this.imageCar;
  }

  async createCars() {
    const carsObj = await this.loader.getCars(this.numberPage);
    this.countTotal.innerHTML = ` (${carsObj?.count})`;
    countTotalNum = Number(carsObj?.count);
    this.currentPage.innerHTML = `${this.numberPage}`;

    this.cars.innerHTML = '';
    carsObj?.items.forEach((el: Car) => this.createCar(el));
  }

  async removeCar(id: number) {
    this.loader.deleteCar(Number(id));
    this.createCars();
    loadPagination(pageNum);
  }

  selectCar(id: number, color: string, name: string) {
    const containerUpdateCar = [this.carNameUpdate, this.carColorUpdate, this.btnUpdateCar];

    containerUpdateCar.forEach((el) => {
      el.disabled = false;
    });

    this.carNameUpdate.value = name;
    this.carColorUpdate.value = color;

    this.btnUpdateCar.addEventListener('click', async () => {
      if (this.carNameUpdate.value === '') {
        alert('Enter the make of the car, please!');
      } else {
        await this.loader.updateCar(id, { name: carNameUpdate.value, color: carColorUpdate.value } );

        this.carNameUpdate.value = '';
        this.carColorUpdate.value = '#ffffff';
  
        containerUpdateCar.forEach((el) => {
          el.disabled = true;
        });

        this.createCars();
      }
    });
  }

  async startDriving(id: number) {
    const { startBtn, car } = trackElements(id);
    startBtn.disabled = true;
    const { velocity, distance } = await this.loader.switchEngine(id, 'started');
    const time = Math.round(distance / velocity );
    car.style.animationName = 'car-animation';
    car.style.animationDuration = `${time.toString()}ms`;
    const { success } = await this.loader.drive(id);
    if (!success) {
      car.style.animationPlayState = 'paused';
    }
    (document.querySelector(`[data-stop='${id}']`) as HTMLButtonElement).disabled = false;
  }

  async stopDriving(id: number) {
    const { startBtn, stopBtn, car } = trackElements(id);
    stopBtn.disabled = true;
    await this.loader.switchEngine(id, 'stopped');
    startBtn.disabled = false;
    car.style.animationName = 'none';
    car.style.animationDuration = 'initial';
  }
}