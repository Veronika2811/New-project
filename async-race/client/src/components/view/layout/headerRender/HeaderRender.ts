import './header.scss';
import { createDomNode } from '../../../helpers/createDom';
import {
  garageSwitchButton,
  winnersSwitchButton,
} from '../../../constants/constantsDOM';

export default class HeaderRender {
  private garageSwitchButton = garageSwitchButton;

  private winnersSwitchButton = winnersSwitchButton;

  constructor() {
    const header = createDomNode(
      'header',
      ['header'],
      document.body,
    );
    header.append(this.garageSwitchButton, this.winnersSwitchButton);
  }
}
