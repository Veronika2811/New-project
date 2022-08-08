import ModalRender from '../view/garagePage/modal/ModalRender';

export default class ModalListener extends ModalRender {
  constructor() {
    super();

    this.overlay.addEventListener('click', () => this.closeModal());
  }

  closeModal(): void {
    document.body.classList.remove('open');
    this.overlay.classList.add('hide');
  }
}
