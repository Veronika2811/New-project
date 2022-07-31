import './pagination.scss'; 
import createBtn from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import { CarsItem, countTotalNum } from '../carsItem/CarsItem';
import { cars } from '../containerGarage/ContainerGarage';
import { containerGarage } from '../containerGarageTitle/ContainerGarageTitle';
import { Loader } from '../../controller/loader';
import loadPagination from '../../helpers/paginationLoad';

export const btnNext = createBtn(['btn', 'green', 'btn-next'], 'next');
export const btnPrev = createBtn(['btn', 'green', 'btn-prev'], 'prev');
export let pageNum = 1;

export class Pagination {
  pagination;

  btnPrev = btnPrev;

  btnNext = btnNext;

  containerGarage = containerGarage;

  pageNum = pageNum;

  cars = cars;

  loader = new Loader();

  constructor() {
    this.pagination = createDomNode('div', ['pagination'], this.containerGarage);
    this.pagination.append(this.btnPrev, this.btnNext);
    loadPagination(pageNum);
    
    this.btnNext.addEventListener('click', () => this.nextPage());
    this.btnPrev.addEventListener('click', () => this.prevPage());
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
}

