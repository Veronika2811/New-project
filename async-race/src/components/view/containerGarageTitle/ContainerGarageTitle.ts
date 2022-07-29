import './containerGarageTitle.scss';
import createDomNode from '../../helpers/createDomNode';
import ControlBtn from '../controlButtons/controlButtons';

export default class ContainerGarageTitle extends ControlBtn {
  containerGarage;

  pageTitle;

  countTotal;

  page;

  currentPage;

  constructor() {
    super();

    this.containerGarage = createDomNode('div', ['container-garage'], this.sectionGarage);
    this.pageTitle = createDomNode('h1', ['title'], this.containerGarage, 'Garage');
    this.countTotal = createDomNode('span', ['count-total'], this.pageTitle);
    this.page = createDomNode('h2', ['page'], this.containerGarage, 'Page #');
    this.currentPage = createDomNode('span', ['current-page'], this.page);
  }
}