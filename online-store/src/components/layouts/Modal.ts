import createDomNode from '../helpers/createDomNode';

export default class Modal {
  private modal;

  private overlay;

  private modalWindow;

  private contentWindow;

  private modalBtn;

  constructor() {
    this.modal = createDomNode('div', 'modal');
    this.overlay = createDomNode('div', 'overlay');
    this.modalWindow = createDomNode('div', 'modal__window');
    this.contentWindow = createDomNode('p', 'content', 'Извините, все слоты заполнены');
    this.modalBtn = createDomNode('div', 'modal__btn-close', 'Close');

    this.modalWindow.append(this.contentWindow, this.modalBtn);

    this.modal.append(this.overlay, this.modalWindow);

    document.body.append(this.modal);
  }
}