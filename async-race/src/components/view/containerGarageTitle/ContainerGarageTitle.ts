import './containerGarageTitle.scss';
import createDomNode from '../../helpers/createDomNode';

export const containerGarage = createDomNode('div', ['container-garage']);

export const countTotal = createDomNode('span', ['count-total']);

export const currentPage = createDomNode('span', ['current-page']);

export class ContainerGarageTitle {
  sectionGarage;

  containerGarage = containerGarage;

  titlePage;

  pageTitle;

  countTotal = countTotal;

  page;

  currentPage = currentPage;

  constructor(sectionGarage: HTMLElement, titlePage: string) {
    this.sectionGarage = sectionGarage;
    this.titlePage = titlePage;

    this.sectionGarage.append(this.containerGarage);
    this.pageTitle = createDomNode('h1', ['title'], this.containerGarage, this.titlePage);
    this.pageTitle.append(this.countTotal);
    this.page = createDomNode('h2', ['page'], this.containerGarage, 'Page #');
    this.page.append(this.currentPage);
  }
}