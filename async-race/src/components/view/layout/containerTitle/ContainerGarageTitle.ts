import './containerTitle.scss';
import createDomNode from '../../../helpers/createDomNode';

export const countTotal = createDomNode('span', ['count-total']);

export const currentPage = createDomNode('span', ['current-page']);

export const countTotalWinners = createDomNode('span', ['count-total-win']);

export const currentPageWinners = createDomNode('span', ['current-page-win']);

export class ContainerTitle {
  section;

  containerGarage;

  titlePage;

  pageTitle;

  countTotal = countTotal;

  page;

  currentPage = currentPage;

  constructor(section: HTMLElement, containerGarage: HTMLElement, titlePage: string) {
    this.section = section;
    this.containerGarage = containerGarage;
    this.titlePage = titlePage;

    this.section.append(this.containerGarage);
    this.pageTitle = createDomNode('h1', ['title'], this.containerGarage, this.titlePage);
    this.page = createDomNode('h2', ['page'], this.containerGarage, 'Page #');
  }

  garageTitle() {
    this.pageTitle.append(this.countTotal);
    this.page.append(this.currentPage);
  }

  winnersTitle() {
    this.pageTitle.append(countTotalWinners);
    this.page.append(currentPageWinners);
  }
}