import './pagination.scss'; 
import createBtn from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { CarsItem, countTotalNum } from '../garage/carsItem/CarsItem';
import { cars } from '../garage/containerGarage/ContainerGarage';
// import { containerGarage } from '../View';
import { Loader } from '../../controller/loader';
import { loadPagination, loadPaginationWin } from '../../helpers/paginationLoad';
import WinnersItems from '../winners/WinnersItems';
// import { countTotalWinners } from '../layout/containerTitle/ContainerGarageTitle';
// import { Winners } from '../winners/Winners';
import { countTotalNumWin } from '../winners/WinnersItems';
// import { containerWinners } from '../View';

export const btnNext = createBtn(['btn', 'green', 'btn-next'], 'next');
export const btnPrev = createBtn(['btn', 'green', 'btn-prev'], 'prev');
export let pageNum = 1;

export const btnNextWin = createBtn(['btn', 'green', 'btn-next-win'], 'next');
export const btnPrevWin = createBtn(['btn', 'green', 'btn-prev-win'], 'prev');
export let pageNumWin = 1;

export class Pagination {
  pagination;

  btnPrev = btnPrev;

  btnNext = btnNext;

  // containerGarage = containerGarage;

  pageNum = pageNum;

  cars = cars;

  loader = new Loader();

  btnPrevWin = btnPrevWin;

  btnNextWin = btnNextWin;

  constructor(container: HTMLElement) {
    this.pagination = createDomNode('div', ['pagination'], container);
    // this.pagination.append(this.btnPrev, this.btnNext);
    // loadPagination(pageNum);
    
    // this.btnNext.addEventListener('click', () => this.nextPage());
    // this.btnPrev.addEventListener('click', () => this.prevPage());
  }

  paginationGarage() {
    this.pagination.append(this.btnPrev, this.btnNext);
    loadPagination(pageNum);
    
    this.btnNext.addEventListener('click', () => this.nextPage());
    this.btnPrev.addEventListener('click', () => this.prevPage());
  }

  paginationWinners() {
    this.pagination.append(this.btnPrevWin, this.btnNextWin);
    loadPaginationWin(pageNumWin);
    
    this.btnNextWin.addEventListener('click', () => this.nextPageWin());
    this.btnPrevWin.addEventListener('click', () => this.prevPageWin());
  }

  nextPage(): void {
    const result = pageNum + 1;

    if (result <= Math.ceil(countTotalNum / 7)) {
      pageNum = result;
    }

    new CarsItem(this.cars, pageNum).createCars();
    loadPagination(pageNum);
  }

  prevPage() {
    const result = pageNum - 1;

    if (result <= Math.ceil(countTotalNum / 7)) {
      pageNum = result;
    }

    new CarsItem(this.cars, pageNum).createCars();
    loadPagination(pageNum);
  }

  nextPageWin() {
    const result = pageNumWin + 1;

    if (result <= Math.ceil(countTotalNumWin / 10)) {
      pageNumWin = result;
    }

    new WinnersItems(pageNumWin).createWinners();
    loadPaginationWin(pageNumWin);
  }

  prevPageWin() {
    const result = pageNumWin - 1;

    if (result <= Math.ceil(countTotalNumWin / 10)) {
      pageNumWin = result;
    }

    new WinnersItems(pageNumWin).createWinners();
    loadPaginationWin(pageNumWin);
  }
}

