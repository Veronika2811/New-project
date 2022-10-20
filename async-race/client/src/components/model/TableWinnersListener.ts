import TableWinnersRender from '../view/winnersPage/tableWinnersRender/TableWinnersRender';
import { WinnerRender } from '../view/winnersPage/WinnerRender';
import { currentPageWinners } from '../view/paginationRender/PaginationRender';
import { SORTER, SORTER_ORDER } from '../constants/constants';

export let sort = SORTER.byWins;
export let order = SORTER_ORDER.byDecrease;

export class TableWinnersListener extends TableWinnersRender {
  constructor() {
    super();

    this.winsCar.addEventListener('click', () => this.sortWins());
    this.timeCar.addEventListener('click', () => this.sortTime());
  }

  sortWins(): void {
    sort = SORTER.byWins;
    this.toogleClass(this.arroWins);
  }

  sortTime(): void {
    sort = SORTER.byTime;
    this.toogleClass(this.arrowTime);
  }

  toogleClass(arrow: HTMLElement): void {
    if (arrow.matches('.up')) {
      arrow.classList.remove('up');
      arrow.classList.add('down');
    } else if (this.arrowTime.matches('.down')) {
      arrow.classList.remove('down');
      arrow.classList.add('up');
    }
    this.sorting();
  }

  sorting(): void {
    if (sort === SORTER.byWins) {
      order = order === SORTER_ORDER.byIncrease ? SORTER_ORDER.byDecrease : SORTER_ORDER.byIncrease;
      new WinnerRender(currentPageWinners).createWinners();
    } else if (sort === SORTER.byTime) {
      order = order === SORTER_ORDER.byIncrease ? SORTER_ORDER.byDecrease : SORTER_ORDER.byIncrease;
      new WinnerRender(currentPageWinners).createWinners();
    }
  }
}
