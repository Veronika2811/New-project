import PageContainersRender from '../view/layout/pageСontainersRender/PageContainersRender';

export default class PageSwitching extends PageContainersRender {
  constructor() {
    super();

    this.winnersSwitchButton.addEventListener('click', () => this.getPageWinners());
    this.garageSwitchButton.addEventListener('click', () => this.getPageGarage());
  }

  getPageWinners(): void {
    this.sectionWinners.classList.remove('hide');
    this.sectionGarage.classList.add('hide');
    this.winnersSwitchButton.disabled = true;
    this.garageSwitchButton.disabled = false;
  }

  getPageGarage(): void {
    this.sectionGarage.classList.remove('hide');
    this.sectionWinners.classList.add('hide');
    this.winnersSwitchButton.disabled = false;
    this.garageSwitchButton.disabled = true;
  }
}
