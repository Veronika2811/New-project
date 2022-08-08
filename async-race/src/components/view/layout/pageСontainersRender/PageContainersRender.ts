import { createDomNode } from '../../../helpers/createDom';
import {
  garageSwitchButton,
  winnersSwitchButton,
  sectionGarage,
  sectionWinners,
} from '../../../constants/constantsDOM';

export default class PageContainersRender {
  protected garageSwitchButton = garageSwitchButton;

  protected winnersSwitchButton = winnersSwitchButton;

  protected sectionGarage = sectionGarage;

  protected sectionWinners = sectionWinners;

  constructor() {
    const main = createDomNode('main', ['main'], document.body);
    main.append(this.sectionGarage, this.sectionWinners);
  }
}
