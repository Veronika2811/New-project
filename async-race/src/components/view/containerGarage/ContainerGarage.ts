import createDomNode from '../../helpers/createDomNode';
import ContainerGarageTitle from '../containerGarageTitle/ContainerGarageTitle';

export default class ContainerGarage extends ContainerGarageTitle {
  cars;

  constructor() {
    super();

    this.cars = createDomNode('div', ['cars'], this.containerGarage);
  }
}