import './pagination.scss';
import createBtn from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import CarsItem from '../carsItem/CarsItem';

export default class Pagination extends CarsItem {
  pagination;

  btnPrev;

  btnNext;

  constructor() {
    super();
    
    this.pagination = createDomNode('div', ['pagination'], this.cars);

    this.btnPrev = createBtn(['btn', 'green', 'btn-prev'], 'prev', this.pagination);
    this.btnNext = createBtn(['btn', 'green', 'btn-next'], 'next', this.pagination);
  }
}