import './winner.scss';
import createDomNode from '../../helpers/createDomNode';
import { containerWinners } from '../View';
import { contWin } from './winnersContainer';

export const table = createDomNode('table', ['table-wins']);

export class WinnersTable {
  containerWinners = containerWinners;

  table = table;

  thead;

  numCar;

  imageCar;

  nameCar;

  winsCar;

  timeCar;

  contWin = contWin; 

  constructor() {
    // this.table = createDomNode('table', ['table-wins']);
    this.table.innerHTML = '';
    this.contWin.append(this.table);
    this.thead = createDomNode('thead', ['thead-table'], this.table);
    this.numCar = createDomNode('th', ['num-car'], this.thead, '#');
    this.imageCar = createDomNode('th', ['image-car-win'], this.thead, 'Car');
    this.nameCar = createDomNode('th', ['name-car-win'], this.thead, 'Name');
    this.winsCar = createDomNode('th', ['wins-car'], this.thead, 'Wins');
    this.timeCar = createDomNode('th', ['time-car'], this.thead, 'Best time');
  }
}


// import './winner.scss';
// import { Loader } from '../../controller/loader';
// import createDomNode from '../../helpers/createDomNode';
// import { countTotalWinners, currentPageWinners } from '../layout/containerTitle/ContainerGarageTitle';
// import { containerWinners } from '../View';
// import getCar from '../../helpers/getImageCar';
// import { Pagination } from '../pagination/pagination';

// export const table = createDomNode('table', ['table-wins']);

// export class Winners {
//   containerWinners = containerWinners;

//   table = table;

//   thead!: HTMLElement;

//   numCar!: HTMLElement;

//   imageCar!: HTMLElement;

//   nameCar!: HTMLElement;

//   winsCar!: HTMLElement;

//   timeCar!: HTMLElement;

//   tbody!: HTMLElement;

//   td!: HTMLElement;

//   tdImage!: HTMLElement;

//   loader = new Loader();

//   pageNumber;

//   sort;

//   order;

//   countTotalWinners = countTotalWinners;

//   currentPageWinners = currentPageWinners;

//   paginationWin;
  
// constructor() {
//   this.pageNumber = 1;
//   this.sort = 'wins';
//   this.order = 'DESC';

//   // this.containerWinners.append(this.table);
//   this.table.innerHTML = '';
//   this.createTable();
//   this.paginationWin = new Pagination(this.containerWinners).paginationWinners();
// }

// createTable() {
 
//   this.containerWinners.append(this.table);
//   this.thead = createDomNode('thead', ['thead-table'], this.table);
//   this.numCar = createDomNode('th', ['num-car'], this.thead, '#');
//   this.imageCar = createDomNode('th', ['image-car-win'], this.thead, 'Car');
//   this.nameCar = createDomNode('th', ['name-car-win'], this.thead, 'Name');
//   this.winsCar = createDomNode('th', ['wins-car'], this.thead, 'Wins');
//   this.timeCar = createDomNode('th', ['time-car'], this.thead, 'Best time');
//   this.getWinners();
// }

// createWinners(index: number, color: string, name: string, wins: number, time: number) {
//   this.tbody = createDomNode('tbody', ['tbody'], this.table);
//   this.td = createDomNode('td', ['td'], this.tbody, `${index}`);
//   this.tdImage = createDomNode('td', ['td'], this.tbody);
//   this.tdImage.innerHTML = getCar(color);
//   this.td = createDomNode('td', ['td'], this.tbody, `${name}`);
//   this.td = createDomNode('td', ['td'], this.tbody, `${wins}`);
//   this.td = createDomNode('td', ['td'], this.tbody, `${time}`);
// }

// async getWinners() {
//   const winners = await this.loader.getWinners({ page: this.pageNumber, limit: 10, sort: this.sort, order: this.order } );
//   this.countTotalWinners.innerHTML = ` (${winners?.count})`;
//   this.currentPageWinners.innerHTML = `${this.pageNumber}`;
//   winners?.items.forEach((el, index) => {
//     this.createWinners(index + 1, el.car.color, el.car.name, el.wins, el.time);
//   });
// }
// }