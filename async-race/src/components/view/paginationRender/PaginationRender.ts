import './pagination.scss';
import { createDomNode } from '../../helpers/createDom';
import Loader from '../../controller/loader';
import { WinnerRender, currentNumberOfWinners } from '../winnersPage/WinnerRender';
import { CarRender, currentNumberOfCars } from '../garagePage/carRender/CarRender';
import {
  btnNextGarage,
  btnPrevGarage,
  btnNextWinners,
  btnPrevWinners,
} from '../../constants/constantsDOM';
import {
  MAX_ITEMS_PER_PAGE_WINNERS,
  MAX_ITEMS_PER_PAGE_GARAGE,
} from '../../constants/constants';

export let currentPageGarage = 1;

export let currentPageWinners = 1;

export class PaginationRender {
  private pagination;

  protected loader = new Loader();

  private btnPrevGarage = btnPrevGarage;

  private btnNextGarage = btnNextGarage;

  private btnPrevWinners = btnPrevWinners;

  private btnNextWinners = btnNextWinners;

  constructor(container: HTMLElement) {
    this.pagination = createDomNode('div', ['pagination'], container);
  }

  paginationGarageRender(): void {
    this.pagination.append(this.btnPrevGarage, this.btnNextGarage);

    this.btnNextGarage.addEventListener('click', () => this.nextPageGarage());
    this.btnPrevGarage.addEventListener('click', () => this.prevPageGarage());
  }

  paginationWinnersRender(): void {
    this.pagination.append(this.btnPrevWinners, this.btnNextWinners);

    this.btnNextWinners.addEventListener('click', () => this.nextPageWinners());
    this.btnPrevWinners.addEventListener('click', () => this.prevPageWinners());
  }

  nextPageGarage(): void {
    currentPageGarage = this.updateNextPages(
      currentPageGarage,
      currentNumberOfCars,
      MAX_ITEMS_PER_PAGE_GARAGE,
    );

    new CarRender(currentPageGarage);
  }

  nextPageWinners(): void {
    currentPageWinners = this.updateNextPages(
      currentPageWinners,
      currentNumberOfWinners,
      MAX_ITEMS_PER_PAGE_WINNERS,
    );

    new WinnerRender(currentPageWinners).createWinners();
  }

  updateNextPages(currentPage: number, totalNumberElements: number, maximumAmount: number): number {
    const result = currentPage + 1;

    if (result <= Math.ceil(totalNumberElements / maximumAmount)) {
      currentPage = result;
    }

    return currentPage;
  }

  prevPageGarage(): void {
    currentPageGarage = this.updatePrevPages(
      currentPageGarage,
      currentNumberOfCars,
      MAX_ITEMS_PER_PAGE_GARAGE,
    );

    new CarRender(currentPageGarage);
  }

  prevPageWinners(): void {
    currentPageWinners = this.updatePrevPages(
      currentPageWinners,
      currentNumberOfWinners,
      MAX_ITEMS_PER_PAGE_WINNERS,
    );

    new WinnerRender(currentPageWinners).createWinners();
  }

  updatePrevPages(currentPage: number, totalNumberElements: number, maximumAmount: number): number {
    const result = currentPage - 1;

    if (result <= Math.ceil(totalNumberElements / maximumAmount)) {
      currentPage = result;
    }

    return currentPage;
  }
}
