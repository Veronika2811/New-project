import { Header } from '../view/layout/header/Header';
import { ControlBtn } from './garage/controlButtons/controlButtons';
import PageContainers from './layout/pageСontainers/PageContainers';
import { sectionGarage, sectionWinners } from '../view/layout/pageСontainers/PageContainers';
import { ContainerTitle } from './layout/containerTitle/ContainerGarageTitle';
import { cars, ContainerGarage } from './garage/containerGarage/ContainerGarage';
import { CarsItem } from './garage/carsItem/CarsItem';
import { Pagination, pageNum, pageNumWin } from './pagination/pagination';
import createDomNode from '../helpers/createDomNode';
import Modal from './garage/modal/modal';
// import { WinnersTable } from './winners/WinnersTable';
import WinnersItems from './winners/WinnersItems';
import Win from './winners/winnersContainer';
// import { Winners } from './winners/Winners';

export const containerGarage = createDomNode('div', ['container-garage']);

export const containerWinners = createDomNode('div', ['container-winners']);

export default class View {
  sectionGarage = sectionGarage;

  sectionWinners = sectionWinners;

  containerWinners = containerWinners;

  header;

  pages;

  controlBtns;

  titlePage;

  containerGarage = containerGarage;

  cars = cars;

  containerGarageCars;

  carsItem;

  pagination;

  pageNum = pageNum;

  winners;

  modal;

  // winnersTable;

  paginationWin;

  winner;
  
  w;

  pageNumWin = pageNumWin;

  constructor() {
    this.header = new Header();
    this.pages = new PageContainers();
    this.controlBtns = new ControlBtn(this.sectionGarage);
    this.titlePage = new ContainerTitle(this.sectionGarage, this.containerGarage, 'Garage').garageTitle();
    this.containerGarageCars = new ContainerGarage(this.containerGarage); 
    this.carsItem = new CarsItem(this.cars, this.pageNum);
    this.pagination = new Pagination(this.containerGarage).paginationGarage(); 
    this.modal = new Modal();
    this.winners = new ContainerTitle(this.sectionWinners, this.containerWinners, 'Winners').winnersTitle();
    this.w = new Win(this.containerWinners);
    // this.winnersTable = new WinnersTable();
    this.winner = new WinnersItems(this.pageNumWin).createWinners();
    this.paginationWin = new Pagination(this.containerWinners).paginationWinners();
  }
}