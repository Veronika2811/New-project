import './header.scss';
import CreateBtn from '../../helpers/CreateBtn';
import createDomNode from '../../helpers/createDomNode';


export default class Header {
  navigation;

  btnGarage;
  
  btnWinners;

  constructor() {
    this.navigation = createDomNode('header', ['header'], '', document.body) as HTMLElement;
    this.btnGarage = new CreateBtn(['btn', 'green', 'btn-garage'], 'to garage', this.navigation) as HTMLButtonElement;
    this.btnWinners = new CreateBtn(['btn', 'green', 'btn-winners'], 'to winners', this.navigation) as HTMLButtonElement;
  }
}