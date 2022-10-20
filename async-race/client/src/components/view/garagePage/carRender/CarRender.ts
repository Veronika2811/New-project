import './carRender.scss';
import { createDomNode, createDomButton } from '../../../helpers/createDom';
import { Car } from '../../../interface/interface';
import getCarImage from '../../../helpers/getCarImage';
import Loader from '../../../controller/loader';
import {
  totalNumberOfCars,
  currentGaragePage,
  btnNextGarage,
  btnPrevGarage,
  carNameUpdate,
  carColorUpdate,
  btnUpdateCar,
  containerCars,
  btnNextWinners,
  btnPrevWinners,
} from '../../../constants/constantsDOM';
import { currentPageWinners } from '../../paginationRender/PaginationRender';
import paginationBtn from '../../../helpers/pagination';
import { startDriving, stopDriving } from '../../../helpers/getCarAnimation';
import { WinnerRender } from '../../winnersPage/WinnerRender';

export let currentNumberOfCars: number;

export class CarRender {
  private carsItem: HTMLElement | undefined;

  private carsWrapper: HTMLElement | undefined;

  protected line: HTMLElement | undefined;

  private carButtons: HTMLElement | undefined;

  private selectBtn: HTMLElement | undefined;

  private removeBtn: HTMLElement | undefined;

  protected carName: HTMLElement | undefined;

  private highway: HTMLElement | undefined;

  private engineButtons: HTMLElement | undefined;

  private carBtnA: HTMLButtonElement | undefined;

  private carBtnB: HTMLButtonElement | undefined;

  private carTrack: HTMLElement | undefined;

  private car: HTMLElement | undefined;

  private imageCar: string | undefined;

  private loader = new Loader();

  public currentPageGarage;

  private totalNumberOfCars = totalNumberOfCars;

  private currentGaragePage = currentGaragePage;

  private carNameUpdate = carNameUpdate;

  private carColorUpdate = carColorUpdate;

  private btnUpdateCar = btnUpdateCar;

  private containerCars = containerCars;

  private createWinner = new WinnerRender(currentPageWinners);

  constructor(currentPageGarage: number) {
    this.currentPageGarage = currentPageGarage;
    this.createCars();
  }

  createCar(data: Car): void {
    this.carsItem = createDomNode('div', ['cars-item'], this.containerCars);
    this.carsWrapper = createDomNode('div', ['cars-wrapper'], this.carsItem);
    this.carsWrapper.setAttribute('data-car', `${data.id}`);
    this.line = createDomNode('div', ['line'], this.carsItem);

    this.carButtons = createDomNode('div', ['car-buttons'], this.carsWrapper);
    this.selectBtn = createDomButton(['btn', 'white', 'btn-select'], 'select', this.carButtons);
    this.selectBtn.addEventListener('click', () => this.selectCar(data.id as number, data.color, data.name));

    this.removeBtn = createDomButton(['btn', 'white', 'btn-remove'], 'remove', this.carButtons);
    this.removeBtn.addEventListener('click', () => this.removeCar(data.id as number));

    this.carName = createDomNode('span', ['car-name'], this.carButtons, `${data.name}`);

    this.highway = createDomNode('div', ['highway'], this.carsWrapper);

    this.engineButtons = createDomNode('div', ['engine-buttons'], this.highway);

    this.carBtnA = createDomButton(
      ['btn-engine', 'btn-start'],
      'A',
      this.engineButtons,
      [{ 'data-start': `${data.id}` }],
    );
    this.carBtnA.addEventListener('click', () => startDriving(Number(`${data.id}`)));
    this.carBtnB = createDomButton(
      ['btn-engine', 'btn-stop'],
      'B',
      this.engineButtons,
      [{ disabled: 'disabled' }, { 'data-stop': `${data.id}` }],
    );
    this.carBtnB.addEventListener('click', () => stopDriving(Number(`${data.id}`)));

    this.carTrack = createDomNode('div', ['car-track'], this.highway);
    this.car = createDomNode('div', ['car'], this.carTrack, '');
    this.car.setAttribute('data-id', `${data.id}`);
    this.imageCar = getCarImage(`${data.color}`);
    this.car.innerHTML = this.imageCar;
  }

  async createCars(): Promise<void> {
    const cars = await this.loader.getCars(this.currentPageGarage);
    this.totalNumberOfCars.innerHTML = ` (${cars?.count})`;
    currentNumberOfCars = Number(cars?.count);

    this.currentGaragePage.innerHTML = `${this.currentPageGarage}`;

    this.containerCars.innerHTML = '';
    cars?.items.forEach((el: Car) => this.createCar(el));

    paginationBtn(
      this.currentPageGarage,
      'Garage',
      btnNextGarage,
      btnPrevGarage,
    );
  }

  async removeCar(id: number): Promise<void> {
    this.loader.deleteCar(id);
    this.createCars();

    paginationBtn(
      this.currentPageGarage,
      'Garage',
      btnNextGarage,
      btnPrevGarage,
    );

    this.loader.deleteWinner(id);
    new WinnerRender(currentPageWinners);

    paginationBtn(
      currentPageWinners,
      'Winners',
      btnNextWinners,
      btnPrevWinners,
    );
  }

  selectCar(id: number, color: string, name: string): void {
    const containerUpdateCar = [
      this.carNameUpdate,
      this.carColorUpdate,
      this.btnUpdateCar,
    ];

    containerUpdateCar.forEach((el) => {
      el.disabled = false;
    });

    this.carNameUpdate.value = name;
    this.carColorUpdate.value = color;

    this.btnUpdateCar.addEventListener('click', async () => {
      if (this.carNameUpdate.value === '') {
        alert('Enter the make of the car, please!');
      } else {
        await this.loader.updateCar(id, {
          name: carNameUpdate.value,
          color: carColorUpdate.value,
        });

        this.carNameUpdate.value = '';
        this.carColorUpdate.value = '#ffffff';

        containerUpdateCar.forEach((el) => {
          el.disabled = true;
        });

        this.createCars();
      }
    });
  }
}
