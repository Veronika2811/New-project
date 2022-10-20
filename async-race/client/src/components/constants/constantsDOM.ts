import { createDomNode, createDomInput, createDomButton } from '../helpers/createDom';

// Garage
export const garageSwitchButton = createDomButton(['btn', 'green', 'btn-garage'], 'to garage');
garageSwitchButton.disabled = true;

export const sectionGarage = createDomNode('section', ['garage']);

export const containerGarage = createDomNode('div', ['container-garage']);

export const totalNumberOfCars = createDomNode('span', ['count-total']);

export const currentGaragePage = createDomNode('span', ['current-page']);

export const carNameUpdate = createDomInput(['car-name-update'], [{ type: 'text' },
  { placeholder: 'Update name car' }, { disabled: 'true' }]);

export const carColorUpdate = createDomInput(['car-color'], [{ type: 'color' },
  { value: '#ffffff' }, { disabled: 'true' }]);

export const btnUpdateCar = createDomButton(['btn', 'white', 'btn-update'], 'update');
btnUpdateCar.disabled = true;

export const btnCreateCar = createDomButton(['btn', 'white', 'btn-create'], 'create');

export const btnGenerate100Car = createDomButton(['btn', 'white', 'btn-generate'], 'generate cars');

export const containerCars = createDomNode('div', ['cars']);

export const selectBtn = createDomButton(['btn', 'white', 'btn-select'], 'select');

export const removeBtn = createDomButton(['btn', 'white', 'btn-remove'], 'remove');

export const btnNextGarage = createDomButton(['btn', 'green', 'btn-next'], 'next');

export const btnPrevGarage = createDomButton(['btn', 'green', 'btn-prev'], 'prev');

// Winners
export const winnersSwitchButton = createDomButton(['btn', 'green', 'btn-winners'], 'to winners');

export const sectionWinners = createDomNode('section', ['winners', 'hide']);

export const containerWinners = createDomNode('div', ['container-winners']);

export const totalNumberOfWinners = createDomNode('span', ['count-total-win']);

export const currentWinnersPage = createDomNode('span', ['current-page-win']);

export const btnNextWinners = createDomButton(['btn', 'green', 'btn-next-win'], 'next');

export const btnPrevWinners = createDomButton(['btn', 'green', 'btn-prev-win'], 'prev');

export const tableWinners = createDomNode('table', ['table-wins']);
