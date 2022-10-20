import ControlButtonsRender from '../view/garagePage/controlButtonsRender/ControlButtonsRender';
import { CarRender } from '../view/garagePage/carRender/CarRender';
import paginationBtn from '../helpers/pagination';
import { WinnerRender } from '../view/winnersPage/WinnerRender';
import getRandomCar from '../helpers/getRandomCars';
import Loader from '../controller/loader';
import {
  currentPageGarage,
  currentPageWinners,
} from '../view/paginationRender/PaginationRender';
import {
  getCarsIdOnThePage,
  raceCars,
  stopDriving,
} from '../helpers/getCarAnimation';
import {
  sectionGarage,
  btnNextGarage,
  btnPrevGarage,
} from '../constants/constantsDOM';

export default class ButtonsListener extends ControlButtonsRender {
  protected sectionGarage = sectionGarage;

  protected currentPageWinners = currentPageWinners;

  private loader = new Loader();

  private createWinner = new WinnerRender(currentPageWinners);

  constructor() {
    super(sectionGarage);

    this.btnCreateCar.addEventListener('click', () => this.createNewCar());
    this.btnGenerate100Car.addEventListener('click', () => this.generate100RandomCars());

    this.btnRace.addEventListener('click', () => this.startRace());
    this.btnResetRase.addEventListener('click', () => this.stopTheRace());
  }

  async createNewCar(): Promise<void> {
    if (this.carNameInput.value === '') {
      alert('Enter the make of the car, please!');
    } else {
      await this.loader.createCar({
        name: this.carNameInput.value,
        color: this.carColorInput.value,
      });

      this.carNameInput.value = '';
      this.carColorInput.value = '#ffffff';

      new CarRender(currentPageGarage).createCars();

      paginationBtn(currentPageGarage, 'Garage', btnNextGarage, btnPrevGarage);
    }
  }

  async generate100RandomCars(): Promise<void> {
    for (let i = 1; i <= 100; i += 1) {
      await this.loader.createCar(getRandomCar());
    }

    new CarRender(currentPageGarage).createCars();

    paginationBtn(currentPageGarage, 'Garage', btnNextGarage, btnPrevGarage);
  }

  async startRace(): Promise<void> {
    this.btnRace.disabled = true;
    const winner = await raceCars();
    await this.loader.saveWinner({
      id: winner.id as number,
      time: winner.time,
    });
    this.createWinner.createWinners();
  }

  async stopTheRace() {
    this.btnRace.disabled = false;
    this.btnResetRase.disabled = true;
    getCarsIdOnThePage().forEach((el) => stopDriving(el));
    paginationBtn(currentPageGarage, 'Garage', btnNextGarage, btnPrevGarage);
  }
}
