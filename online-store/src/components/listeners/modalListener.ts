export default function modalClose() {
  const modalBtnClose = document.querySelector('.modal__btn-close') as HTMLButtonElement;
  const overlay = document.querySelector('.overlay') as HTMLButtonElement;
  const modal = document.querySelector('.modal') as HTMLDivElement;
  const body = document.querySelector('.body') as HTMLBodyElement;

  modalBtnClose.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('open');
  });

  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('open');
  });
}