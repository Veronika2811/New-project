import createDomNode from '../../../helpers/createDomNode';
import { btnGarage, btnWinners } from '../header/Header';

export const sectionGarage = createDomNode('section', ['garage']);

export const sectionWinners = createDomNode('section', ['winners', 'hide']);

export default class PageContainers {
  private main;

  btnGarage = btnGarage;

  btnWinners = btnWinners;

  sectionGarage = sectionGarage;

  sectionWinners = sectionWinners;

  constructor() {
    this.main = createDomNode('main', ['main'], document.body);
    this.main.append(this.sectionGarage, this.sectionWinners);

    this.btnWinners.addEventListener('click', () => {
      this.getPageWinners();
    });

    this.btnGarage.addEventListener('click', () => {
      this.getPageGarage();
    });
  }

  getPageWinners() {
    this.sectionWinners.classList.remove('hide');
    this.sectionGarage.classList.add('hide');
  }

  getPageGarage() {
    this.sectionGarage.classList.remove('hide');
    this.sectionWinners.classList.add('hide');
  }
}