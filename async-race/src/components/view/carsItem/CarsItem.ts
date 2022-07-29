import './carsItem.scss';
import createButton from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { Car } from '../../interface/interface';
import getCar from '../../helpers/getCar';

export default class CarsItem {
  cars;

  carsItem;

  carsWrapper;

  line;

  carButtons;

  selectBtn;

  removeBtn;

  carName;

  highway;

  engineButtons;

  carBtnA;

  carBtnB;

  car;

  imageCar;

  constructor(data: Car) {
    this.cars = document.querySelector('.cars') as HTMLDivElement;
    this.carsItem = createDomNode('div', ['cars-item'], this.cars);

    this.carsWrapper = createDomNode('div', ['cars-wrapper'], this.carsItem);
    this.line = createDomNode('div', ['line'], this.carsItem);

    this.carButtons = createDomNode('div', ['car-buttons'], this.carsWrapper);
    this.selectBtn = createButton(['btn', 'white', 'btn-select'], 'select', this.carButtons);
    this.removeBtn = createButton(['btn', 'white', 'btn-remove'], 'remove', this.carButtons);
    this.carName = createDomNode('span', ['car-name'], this.carButtons, `${data.name}`);

    this.highway = createDomNode('div', ['highway'], this.carsWrapper);

    this.engineButtons = createDomNode('div', ['engine-buttons'], this.highway);
    this.carBtnA = createButton(['btn-engine', 'btn-start'], 'A',  this.engineButtons);
    this.carBtnB = createButton(['btn-engine', 'btn-stop'], 'B',  this.engineButtons, 'disabled');

    this.car = createDomNode('div', ['car'], this.highway);
    this.imageCar = getCar(`${data.color}`);
    this.car.innerHTML = this.imageCar;
  }
}