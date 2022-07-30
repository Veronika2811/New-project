import './pagination.scss';
import createBtn from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';

export default class Pagination {
  pagination;

  btnPrev;

  btnNext;

  containerGarage;

  constructor(containerGarage: HTMLElement) {
    this.containerGarage = containerGarage;
    
    this.pagination = createDomNode('div', ['pagination'], this.containerGarage);

    this.btnPrev = createBtn(['btn', 'green', 'btn-prev'], 'prev', this.pagination);
    this.btnNext = createBtn(['btn', 'green', 'btn-next'], 'next', this.pagination);
  }
}