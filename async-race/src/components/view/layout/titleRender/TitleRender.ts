import { createDomNode } from '../../../helpers/createDom';
import {
  totalNumberOfCars,
  currentGaragePage,
  totalNumberOfWinners,
  currentWinnersPage,
} from '../../../constants/constantsDOM';

export default class TitleRender {
  private page;

  private pageContent;

  private pageTitle;

  private pageName;

  private pageText;

  private totalNumberOfCars = totalNumberOfCars;

  private currentGaragePage = currentGaragePage;

  private totalNumberOfWinners = totalNumberOfWinners;

  private currentWinnersPage = currentWinnersPage;

  constructor(page: HTMLElement, pageContent: HTMLElement, pageTitle: string) {
    this.page = page;
    this.pageContent = pageContent;
    this.pageTitle = pageTitle;

    this.page.append(this.pageContent);

    this.pageName = createDomNode(
      'h1',
      ['title'],
      this.pageContent,
      this.pageTitle,
    );
    this.pageText = createDomNode('h2', ['page-text'], this.pageContent, 'Page #');
  }

  garageTitle(): void {
    this.pageName.append(this.totalNumberOfCars);
    this.pageText.append(this.currentGaragePage);
  }

  winnersTitle(): void {
    this.pageName.append(this.totalNumberOfWinners);
    this.pageText.append(this.currentWinnersPage);
  }
}
