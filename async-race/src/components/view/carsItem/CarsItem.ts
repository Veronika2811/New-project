import './carsItem.scss';
import createButton from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { Car } from '../../interface/interface';
import getCar from '../../helpers/getCar';
import Loader from '../../controller/loader';
import { countTotal, currentPage } from '../containerGarageTitle/ContainerGarageTitle';

export default class CarsItem {
  carsItem!: HTMLElement;

  carsWrapper!: HTMLElement;

  line!: HTMLElement;

  carButtons!: HTMLElement;

  selectBtn!: HTMLElement;

  removeBtn!: HTMLElement;

  carName!: HTMLElement;

  highway!: HTMLElement;

  engineButtons!: HTMLElement;

  carBtnA!: HTMLElement;

  carBtnB!: HTMLElement;

  car!: HTMLElement;

  imageCar!: string;

  loader = new Loader();

  numberPage;

  cars;

  countTotal = countTotal;

  currentPage = currentPage;

  constructor(cars: HTMLElement) {
    this.cars = cars;
    this.numberPage = 1;
    this.createCars();
  }

  createCar(data: Car) {
    this.carsItem = createDomNode('div', ['cars-item'], this.cars);

    this.carsWrapper = createDomNode('div', ['cars-wrapper'], this.carsItem);
    this.line = createDomNode('div', ['line'], this.carsItem);

    this.carButtons = createDomNode('div', ['car-buttons'], this.carsWrapper);
    this.selectBtn = createButton(['btn', 'white', 'btn-select'], 'select', this.carButtons);
    this.removeBtn = createButton(['btn', 'white', 'btn-remove'], 'remove', this.carButtons);//, [{ 'data-id': `${data.id}` }]);
    this.removeBtn.addEventListener('click', () => this.removeCar(data.id));

    this.carName = createDomNode('span', ['car-name'], this.carButtons, `${data.name}`);

    this.highway = createDomNode('div', ['highway'], this.carsWrapper);

    this.engineButtons = createDomNode('div', ['engine-buttons'], this.highway);
    this.carBtnA = createButton(['btn-engine', 'btn-start'], 'A',  this.engineButtons);
    this.carBtnB = createButton(['btn-engine', 'btn-stop'], 'B',  this.engineButtons, [{ 'disabled': 'true' }]);

    this.car = createDomNode('div', ['car'], this.highway);
    this.imageCar = getCar(`${data.color}`);
    this.car.innerHTML = this.imageCar;
  }

  async createCars() {
    const cars = await this.loader.getCars(this.numberPage);
    this.countTotal.innerHTML = ` (${cars?.count})`;
    this.currentPage.innerHTML = `${this.numberPage}`;

    this.cars.innerHTML = '';
    cars?.items.forEach((el: Car) => this.createCar(el));
  }

  async removeCar(id: number) {
    this.loader.deleteCar(Number(id));
    this.createCars();
  }
}