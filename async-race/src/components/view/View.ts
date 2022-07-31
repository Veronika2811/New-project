import { Header } from '../view/layout/header/Header';
import { ControlBtn } from './controlButtons/controlButtons';
import PageContainers from './layout/pageСontainers/PageContainers';
import { sectionGarage } from '../view/layout/pageСontainers/PageContainers';
import { ContainerGarageTitle, containerGarage } from './containerGarageTitle/ContainerGarageTitle';
import { cars, ContainerGarage } from './containerGarage/ContainerGarage';
import { CarsItem } from './carsItem/CarsItem';
import { Pagination, pageNum } from './pagination/pagination';

export default class View {
  sectionGarage = sectionGarage;

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
  
  constructor() {
    this.header = new Header();
    this.pages = new PageContainers();
    this.controlBtns = new ControlBtn(this.sectionGarage);
    this.titlePage = new ContainerGarageTitle(this.sectionGarage, 'Garage');
    this.containerGarageCars = new ContainerGarage(this.containerGarage); 
    this.carsItem = new CarsItem(this.cars, this.pageNum);
    this.pagination = new Pagination(); 
  }
}