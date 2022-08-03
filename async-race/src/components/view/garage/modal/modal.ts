import createDomNode from '../../../helpers/createDomNode';
import './modal.scss';

export default class Modal {
  overlay;

  modal;

  text;

  constructor() {
    this.overlay = createDomNode('div', ['overlay', 'hide'], document.body);
    this.overlay.addEventListener('click', () => this.closeModal());
    
    this.modal = createDomNode('div', ['modal'], this.overlay);
    this.text = createDomNode('p', ['text-modal'], this.modal);
  }

  closeModal() {
    document.body.classList.remove('open');
    this.overlay.classList.add('hide');
  }
}