import './header.scss';
import createBtn from '../../../helpers/createBtn';
import createDomNode from '../../../helpers/createDomNode';


export default class Header {
  navigation;

  btnGarage;
  
  btnWinners;

  constructor() {
    this.navigation = createDomNode('header', ['header'], document.body) as HTMLElement;
    this.btnGarage = createBtn(['btn', 'green', 'btn-garage'], 'to garage', this.navigation);
    this.btnWinners = createBtn(['btn', 'green', 'btn-winners'], 'to winners', this.navigation);
  }
}