import './winner.scss';
import Loader from '../../controller/loader';
import { createDomNode } from '../../helpers/createDom';
import getCar from '../../helpers/getCarImage';
import { WinnersItem } from '../../interface/interface';
import {
  btnNextWinners,
  tableWinners,
  btnPrevWinners,
  totalNumberOfWinners,
  currentWinnersPage,
  containerWinners,
} from '../../constants/constantsDOM';
import { currentPageWinners } from '../paginationRender/PaginationRender';
import { sort, order } from '../../model/TableWinnersListener';
import paginationBtn from '../../helpers/pagination';
import { MAX_ITEMS_PER_PAGE_WINNERS } from '../../constants/constants';

export let currentNumberOfWinners: number;

export class WinnerRender {
  private tbody: HTMLElement | undefined;

  protected td: HTMLElement | undefined;

  private tdImage: HTMLElement | undefined;

  private tableWinners = tableWinners;

  private loader = new Loader();

  private totalNumberOfWinners = totalNumberOfWinners;

  private currentWinnersPage = currentWinnersPage;

  protected containerWinners = containerWinners;

  private currentPageWinners;

  constructor(currentPageWinner: number) {
    this.currentPageWinners = currentPageWinner;
    this.createWinners();
  }

  createWinner(data: WinnersItem): void {
    this.tbody = createDomNode('tbody', ['tbody'], this.tableWinners);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.index}`);
    this.tdImage = createDomNode('td', ['td'], this.tbody);
    this.tdImage.innerHTML = getCar(data.color);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.name}`);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.wins}`);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.time}`);
  }

  async createWinners(): Promise<void> {
    const winners = await this.loader.getWinners({
      page: this.currentPageWinners,
      limit: MAX_ITEMS_PER_PAGE_WINNERS,
      sort,
      order,
    });
    this.totalNumberOfWinners.innerHTML = ` (${winners?.count})`;
    this.currentWinnersPage.innerHTML = `${this.currentPageWinners}`;
    currentNumberOfWinners = Number(winners?.count);

    while (this.tableWinners.children.length > 1) {
      if (this.tableWinners.lastChild) {
        this.tableWinners.removeChild(this.tableWinners.lastChild);
      }
    }

    winners?.items.forEach((el: { car: { color: string; name: string; };
      wins: number; time: number; }, index: number) => {
      this.createWinner({
        index: Number(`${(this.currentPageWinners - 1) * MAX_ITEMS_PER_PAGE_WINNERS + index + 1}`),
        color: el.car.color,
        name: el.car.name,
        wins: el.wins,
        time: el.time,
      });
    });

    paginationBtn(
      currentPageWinners,
      'Winners',
      btnNextWinners,
      btnPrevWinners,
    );
  }
}
