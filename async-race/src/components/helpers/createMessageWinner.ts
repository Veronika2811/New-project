export default function createAMessageAboutTheWinner(carName: string, carTime: number) {
  const modalWindow = document.querySelector('.text-modal') as HTMLParagraphElement;
  modalWindow.innerHTML = `${carName} went first (${carTime})`;
  (document.querySelector('.overlay') as HTMLParagraphElement).classList.remove('hide');
  document.body.classList.add('open');
}