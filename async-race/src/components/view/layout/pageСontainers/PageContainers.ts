import './PageContainers';
import createDomNode from '../../../helpers/createDomNode';
import Header from '../header/Header';

export default class PageContainers extends Header {
  private main;

  sectionGarage;

  sectionWinners;

  constructor() {
    super();
    this.main = createDomNode('main', ['main'], document.body);
    this.sectionGarage = createDomNode('section', ['garage'], this.main);
    this.sectionWinners = createDomNode('section', ['winners', 'hide'], this.main);
  }

  getPage() {
    this.btnWinners.addEventListener('click', () => {
      this.sectionWinners.classList.remove('hide');
      this.sectionGarage.classList.add('hide');
    });

    this.btnGarage.addEventListener('click', () => {
      this.sectionGarage.classList.remove('hide');
      this.sectionWinners.classList.add('hide');
    });
  }
}