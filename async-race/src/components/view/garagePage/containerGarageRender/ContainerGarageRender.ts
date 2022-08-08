import { containerCars } from '../../../constants/constantsDOM';

export default class ContainerGarageRender {
  private containerCars = containerCars;

  public containerGarage;

  constructor(containerGarage: HTMLElement) {
    this.containerGarage = containerGarage;

    this.containerGarage.append(this.containerCars);
  }
}
