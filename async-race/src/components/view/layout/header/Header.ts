import './header.scss';
import createBtn from '../../../helpers/createBtn';
import createDomNode from '../../../helpers/createDomNode';

export const btnGarage = createBtn(['btn', 'green', 'btn-garage'], 'to garage');

export const btnWinners = createBtn(['btn', 'green', 'btn-winners'], 'to winners');

export class Header {
  navigation;

  btnGarage = btnGarage;
  
  btnWinners = btnWinners;

  constructor() {
    this.navigation = createDomNode('header', ['header'], document.body) as HTMLElement;
    this.navigation.append(this.btnGarage, this.btnWinners);
  }
}