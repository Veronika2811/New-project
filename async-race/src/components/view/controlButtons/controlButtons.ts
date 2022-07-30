import './controlButtons.scss';
import createBtn from '../../helpers/createBtn';
import createDomNode from '../../helpers/createDomNode';
import createInput from '../../helpers/createInput';

export const carNameInput = createInput(['car-name-create'], [{ 'type': 'text' }, { 'placeholder': 'Enter name car' }]);
export const carColorInput = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }]);

export const carNameUpdate = createInput(['car-name-update'], [{ 'type': 'text' }, { 'placeholder': 'Update name car' }, { 'disabled': 'true' }]);
export const carColorUpdate = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }, { 'disabled': 'true' }]);
export const btnUpdateCar = createBtn(['btn', 'btn-update'], 'update');
btnUpdateCar.setAttribute('disabled', 'true');

export class ControlBtn {
  sectionGarage;

  controlButtons;

  createCarForm;

  updateCarForm;

  controlRaceButtons;

  carNameInput = carNameInput;

  carColorInput = carColorInput;

  btnCreateCar;

  carNameUpdate = carNameUpdate;

  carColorUpdate = carColorUpdate;

  btnUpdateCar = btnUpdateCar;

  btnRace;

  btnReset;

  btnGenerateCar;

  constructor(sectionGarage: HTMLElement) {
    this.sectionGarage = sectionGarage;

    this.controlButtons = createDomNode('div', ['control-btn'], this.sectionGarage);
    this.createCarForm = createDomNode('div', ['create-car'],  this.controlButtons);
    this.updateCarForm = createDomNode('div', ['update-car'],  this.controlButtons);
    this.controlRaceButtons = createDomNode('div', ['control-race-buttons'],  this.controlButtons);

    this.createCarForm.append(this.carNameInput, this.carColorInput);

    // this.carNameInput = createInput(['car-name-create'], [{ 'type': 'text' }, { 'placeholder': 'Enter name car' }], this.createCarForm);
    // this.carColorInput = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }], this.createCarForm);
    this.btnCreateCar = createBtn(['btn', 'btn-create'], 'create', this.createCarForm);

    this.updateCarForm.append(this.carNameUpdate, this.carColorUpdate, this.btnUpdateCar);

    // this.btnUpdateCar.addEventListener('click', () => this.updateCar());

    // this.carNameUpdate = createInput(['car-name-update'], [{ 'type': 'text' }, { 'placeholder': 'Update name car' }, { 'disabled': 'true' }], this.updateCarForm);
    // this.carColorUpdate = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }, { 'disabled': 'true' }], this.updateCarForm);
    // this.btnUpdateCar = createBtn(['btn', 'btn-update'], 'update', this.updateCarForm, [{ 'disabled': 'true' }]);

    // this.controlRaceButtons.append(this.btnRace, this.btnReset);

    this.btnRace = createBtn(['btn', 'green', 'btn-race'], 'race', this.controlRaceButtons);
    this.btnReset = createBtn(['btn', 'btn-reset'], 'reset', this.controlRaceButtons, [{ 'disabled': 'true' }]);
    this.btnGenerateCar = createBtn(['btn', 'btn-generate'], 'generate cars', this.controlRaceButtons);
  }
}