import HeaderRender from './layout/headerRender/HeaderRender';
import {
  sectionGarage,
  sectionWinners,
  containerCars,
  containerGarage,
  containerWinners,
} from '../constants/constantsDOM';
import TitleRender from './layout/titleRender/TitleRender';
import ContainerGarageRender from './garagePage/containerGarageRender/ContainerGarageRender';
import { PaginationRender, currentPageGarage, currentPageWinners } from './paginationRender/PaginationRender';
import PageSwitching from '../model/PageSwitching';
import ButtonsListener from '../model/ControlButtonsListener';
import ModalListener from '../model/ModalListener';
import { TableWinnersListener } from '../model/TableWinnersListener';
import { WinnerRender } from './winnersPage/WinnerRender';
import { CarRender } from './garagePage/carRender/CarRender';

export default class View {
  protected headerRender;

  protected pageSwitching;

  protected sectionGarage = sectionGarage;

  protected sectionWinners = sectionWinners;

  protected containerWinners = containerWinners;

  protected controlButtonsRender;

  protected titlePageRender;

  protected containerGarage = containerGarage;

  protected containerCars = containerCars;

  protected containerGarageCars;

  protected paginationPageGarage;

  protected winnersContent;

  protected modal;

  protected winnersTable;

  protected winner;

  protected cars;

  protected paginationPageWinners;

  constructor() {
    this.headerRender = new HeaderRender();
    this.pageSwitching = new PageSwitching();
    this.controlButtonsRender = new ButtonsListener();
    this.titlePageRender = new TitleRender(this.sectionGarage, this.containerGarage, 'Garage')
      .garageTitle();
    this.containerGarageCars = new ContainerGarageRender(this.containerGarage);
    this.cars = new CarRender(currentPageGarage);
    this.paginationPageGarage = new PaginationRender(this.containerGarage).paginationGarageRender();
    this.modal = new ModalListener();
    this.winnersContent = new TitleRender(this.sectionWinners, this.containerWinners, 'Winners')
      .winnersTitle();
    this.winnersTable = new TableWinnersListener();
    this.winner = new WinnerRender(currentPageWinners).createWinners();
    this.paginationPageWinners = new PaginationRender(this.containerWinners)
      .paginationWinnersRender();
  }
}
