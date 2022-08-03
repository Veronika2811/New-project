import { Header } from '../view/layout/header/Header';
import { ControlBtn } from './garage/controlButtons/controlButtons';
import PageContainers from './layout/pageСontainers/PageContainers';
import { sectionGarage, sectionWinners } from '../view/layout/pageСontainers/PageContainers';
import { ContainerTitle } from './layout/containerTitle/ContainerGarageTitle';
import { cars, ContainerGarage } from './garage/containerGarage/ContainerGarage';
import { CarsItem } from './garage/carsItem/CarsItem';
import { Pagination, pageNum } from './pagination/pagination';
import createDomNode from '../helpers/createDomNode';
import Modal from './garage/modal/modal';
// import { sectionWinners } from './layout/pageСontainers/PageContainers';
// import { sectionWinners } from './winners/Winners';

export const containerGarage = createDomNode('div', ['container-garage']);

export const containerWinners = createDomNode('div', ['container-winners']);

// export const containerGarage = createDomNode('div', ['container-garage']);

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
  
  constructor() {
    this.header = new Header();
    this.pages = new PageContainers();
    this.controlBtns = new ControlBtn(this.sectionGarage);
    // this.titlePage = new ContainerTitle(this.sectionGarage, this.containerGarage, 'Garage');
    this.titlePage = new ContainerTitle(this.sectionGarage, this.containerGarage, 'Garage').garageTitle();
    this.containerGarageCars = new ContainerGarage(this.containerGarage); 
    this.carsItem = new CarsItem(this.cars, this.pageNum);
    this.pagination = new Pagination(); 
    this.winners = new ContainerTitle(this.sectionWinners, this.containerWinners, 'Winners').winnersTitle();
    this.modal = new Modal();
  }
}