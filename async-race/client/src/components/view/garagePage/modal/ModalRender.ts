import { createDomNode } from '../../../helpers/createDom';
import './modal.scss';

export default class ModalRender {
  protected overlay;

  private modal;

  protected text;

  constructor() {
    this.overlay = createDomNode('div', ['overlay', 'hide'], document.body);

    this.modal = createDomNode('div', ['modal'], this.overlay);
    this.text = createDomNode('p', ['text-modal'], this.modal);
  }
}
