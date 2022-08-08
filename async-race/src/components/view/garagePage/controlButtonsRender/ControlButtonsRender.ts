import './controlButtonsRender.scss';
import { createDomNode, createDomInput, createDomButton } from '../../../helpers/createDom';
import {
  carNameUpdate,
  carColorUpdate,
  btnUpdateCar,
  btnCreateCar,
  btnGenerate100Car,
} from '../../../constants/constantsDOM';

export default class ControlButtonsRender {
  protected sectionGarage;

  private controlButtons;

  private createCarForm;

  private updateCarForm;

  private controlRaceButtons;

  protected carNameInput;

  protected carColorInput;

  protected btnCreateCar = btnCreateCar;

  private carNameUpdate = carNameUpdate;

  private carColorUpdate = carColorUpdate;

  private btnUpdateCar = btnUpdateCar;

  protected btnRace;

  protected btnResetRase;

  protected btnGenerate100Car = btnGenerate100Car;

  constructor(sectionGarage: HTMLElement) {
    this.sectionGarage = sectionGarage;

    this.controlButtons = createDomNode('div', ['control-btn'], this.sectionGarage);
    this.createCarForm = createDomNode('div', ['create-car'], this.controlButtons);
    this.updateCarForm = createDomNode('div', ['update-car'], this.controlButtons);
    this.controlRaceButtons = createDomNode(
      'div',
      ['control-race-buttons'],
      this.controlButtons,
    );

    this.carNameInput = createDomInput(['car-name-create'], [{ type: 'text' },
      { placeholder: 'Enter name car' }], this.createCarForm);
    this.carColorInput = createDomInput(
      ['car-color'],
      [{ type: 'color' }, { value: '#ffffff' }],
      this.createCarForm,
    );
    this.createCarForm.append(this.btnCreateCar);

    this.updateCarForm.append(this.carNameUpdate, this.carColorUpdate, this.btnUpdateCar);

    this.btnRace = createDomButton(['btn', 'green', 'btn-race'], 'race', this.controlRaceButtons);

    this.btnResetRase = createDomButton(
      ['btn', 'white', 'btn-reset'],
      'reset',
      this.controlRaceButtons,
      [{ disabled: 'true' }],
    );

    this.controlRaceButtons.append(btnGenerate100Car);
  }
}
