
import createDomNode from '../../../helpers/createDomNode';

export const cars = createDomNode('div', ['cars']);

export class ContainerGarage { 
  cars = cars;

  containerGarage;

  constructor(containerGarage: HTMLElement) {
    this.containerGarage = containerGarage;
    
    this.containerGarage.append(this.cars);
  }
}