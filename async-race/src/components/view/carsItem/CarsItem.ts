import './carsItem.scss';
import createButton from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { Car } from '../../interface/interface';
import getCar from '../../helpers/getCar';
import ContainerGarage from '../containerGarage/ContainerGarage';

export default class CarsItem extends ContainerGarage {
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

  createCar(data: Car) {
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