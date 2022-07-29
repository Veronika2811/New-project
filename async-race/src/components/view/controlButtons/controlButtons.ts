import './controlButtons.scss';
import createBtn from '../../helpers/CreateBtn';
import createDomNode from '../../helpers/createDomNode';
import createInput from '../../helpers/CreateInput';
import PageContainers from '../layout/pageСontainers/PageContainers';

export default class ControlBtn extends PageContainers {
  controlButtons;

  createCarForm;

  updateCarForm;

  controlRaceButtons;

  carNameInput;

  carColorInput;

  btnCreateCar;

  carNameUpdate;

  carColorUpdate;

  btnRace;

  btnReset;

  btnGenerateCar;

  constructor() {
    super();

    this.controlButtons = createDomNode('div', ['control-btn'], this.sectionGarage);
    this.createCarForm = createDomNode('div', ['create-car'],  this.controlButtons);
    this.updateCarForm = createDomNode('div', ['update-car'],  this.controlButtons);
    this.controlRaceButtons = createDomNode('div', ['control-race-buttons'],  this.controlButtons);

    this.carNameInput = createInput(['car-name-create'], [{ 'type': 'text' }, { 'placeholder': 'Enter name car' }], this.createCarForm);
    this.carColorInput = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }], this.createCarForm);
    this.btnCreateCar = createBtn(['btn', 'btn-create'], 'create', this.createCarForm);

    this.carNameUpdate = createInput(['car-name-update'], [{ 'type': 'text' }, { 'placeholder': 'Update name car' }, { 'disabled': 'true' }], this.updateCarForm);
    this.carColorUpdate = createInput(['car-color'], [{ 'type': 'color' }, { 'value': '#ffffff' }, { 'disabled': 'true' }], this.updateCarForm);
    this.btnCreateCar = createBtn(['btn', 'btn-update'], 'update', this.updateCarForm, 'disabled');

    this.btnRace = createBtn(['btn', 'green', 'btn-race'], 'race', this.controlRaceButtons);
    this.btnReset = createBtn(['btn', 'btn-reset'], 'reset', this.controlRaceButtons, 'disabled');
    this.btnGenerateCar = createBtn(['btn', 'btn-generate'], 'generate cars', this.controlRaceButtons);
  }
}