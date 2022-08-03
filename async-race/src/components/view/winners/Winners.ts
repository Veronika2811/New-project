import createDomNode from '../../helpers/createDomNode';
import { sectionWinners } from '../layout/pageСontainers/PageContainers';

export const countTotalWinners = createDomNode('span', ['count-total-win']);

export const currentPageWinners = createDomNode('span', ['current-page-win']);

export class Winners {
  containerWinners = countTotalWinners;

  sectionWinners = sectionWinners;

  currentPageWinners = currentPageWinners;

  countTotalWinners = countTotalWinners;

  pageTitle;

  page;
  
  constructor() {
    this.pageTitle = createDomNode('h1', ['title'], this.sectionWinners, 'Winners');
    this.pageTitle.append(this.countTotalWinners);
    this.page = createDomNode('h2', ['page'], this.sectionWinners, 'Page #');
    this.page.append(this.currentPageWinners);
  }
}