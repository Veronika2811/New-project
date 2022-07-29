import Loader from '../../controller/loader';
import createDomNode from '../../helpers/createDomNode';
import { Car } from '../../interface/interface';
import CarsItem from '../carsItem/CarsItem';
import ContainerGarageTitle from '../containerGarageTitle/ContainerGarageTitle';

export default class ContainerGarage extends ContainerGarageTitle {
  cars;

  numberPage;

  loader = new Loader();

  constructor() {
    super();

    this.cars = createDomNode('div', ['cars'], this.containerGarage);

    this.numberPage = 1;
  }

  async createCars() {
    const cars = await this.loader.getCars(this.numberPage);
    this.countTotal.innerHTML = ` (${cars?.count})`;

    cars?.items.forEach((el: Car) => new CarsItem(el));
  }
}