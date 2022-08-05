import { Loader } from '../../controller/loader';
import createDomNode from '../../helpers/createDomNode';
import getCar from '../../helpers/getImageCar';
import { WinnersItem } from '../../interface/interface';
import { table, WinnersTable } from './WinnersTable';
import { countTotalWinners, currentPageWinners } from '../layout/containerTitle/ContainerGarageTitle';
import { containerWinners } from '../View';
// import { pageNumWin, Pagination } from '../pagination/pagination';
import { contWin } from './winnersContainer';
import { pageNumWin } from '../pagination/pagination';
import { sort, order } from './WinnersTable';

export let countTotalNumWin: number;

// export let sort = 'wins';
// export let order = 'DESC';

export default class WinnersItems {
  // pageNumber;

  // sort = sort;

  // order = order;

  tbody!: HTMLElement;

  td!: HTMLElement;

  tdImage!: HTMLElement;

  table = table;

  loader = new Loader();

  countTotalWinners = countTotalWinners;

  currentPageWinners = currentPageWinners;

  containerWinners = containerWinners;

  contWin = contWin;

  numberPage = pageNumWin;

  constructor(numberPage: number) {
    this.numberPage = numberPage;
    // this.sort = 'wins';
    // this.order = 'DESC';
    // this.tbody.innerHTML = '';
    // this.createWinners();
  }

  createWinner(data: WinnersItem) {
    this.tbody = createDomNode('tbody', ['tbody'], this.table);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.index}`);
    this.tdImage = createDomNode('td', ['td'], this.tbody);
    this.tdImage.innerHTML = getCar(data.color);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.name}`);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.wins}`);
    this.td = createDomNode('td', ['td'], this.tbody, `${data.time}`);
  }

  async createWinners() {
    const winners = await this.loader.getWinners({ page: this.numberPage, limit: 10, sort: sort, order: order } );
    this.countTotalWinners.innerHTML = ` (${winners?.count})`;
    this.currentPageWinners.innerHTML = `${this.numberPage}`;
    countTotalNumWin = Number(winners?.count);
    // this.contWin.innerHTML = '';
    // new WinnersTable();
    while (this.table.children.length > 1) {
      this.table.removeChild(this.table.lastChild!);
    }
    winners?.items.forEach((el, index) => {
      this.createWinner({ index: Number(`${(this.numberPage - 1) * 10 + index + 1}`), color: el.car.color, name: el.car.name, wins: el.wins, time: el.time });
    });
  }
}