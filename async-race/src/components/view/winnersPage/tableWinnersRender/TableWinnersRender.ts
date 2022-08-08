import { createDomNode } from '../../../helpers/createDom';
import { containerWinners, tableWinners } from '../../../constants/constantsDOM';

export default class TableWinnersRender {
  private containerWinners = containerWinners;

  private tableWinners = tableWinners;

  private thead;

  protected numCar;

  protected imageCar;

  protected nameCar;

  protected winsCar;

  protected timeCar;

  protected arroWins;

  protected arrowTime;

  constructor() {
    this.tableWinners.innerHTML = '';
    this.containerWinners.append(this.tableWinners);
    this.thead = createDomNode('thead', ['thead-table'], this.tableWinners);
    this.numCar = createDomNode('th', ['num-car'], this.thead, '#');
    this.imageCar = createDomNode('th', ['image-car-win'], this.thead, 'Car');
    this.nameCar = createDomNode('th', ['name-car-win'], this.thead, 'Name');

    this.winsCar = createDomNode('th', ['wins-car'], this.thead, 'Wins');
    this.arroWins = createDomNode('span', ['arrow', 'up', 'wins-arrow'], this.winsCar);

    this.timeCar = createDomNode('th', ['time-car'], this.thead, 'Best time');
    this.arrowTime = createDomNode('span', ['arrow', 'up', 'time-arrow'], this.timeCar);
  }
}
