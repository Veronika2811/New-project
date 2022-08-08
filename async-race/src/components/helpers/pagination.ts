import { MAX_ITEMS_PER_PAGE_GARAGE } from '../constants/constants';
import { currentNumberOfCars } from '../view/garagePage/carRender/CarRender';
import { currentNumberOfWinners } from '../view/winnersPage/WinnerRender';

export default async function paginationBtn(
  pageNumber: number,
  pageName: string,
  btnNext: HTMLButtonElement,
  btnPrev: HTMLButtonElement,
): Promise<void> {
  let currentPage;
  if (pageName === 'Garage') {
    currentPage = Math.ceil(currentNumberOfCars / MAX_ITEMS_PER_PAGE_GARAGE);
  } else if (pageName === 'Winners') {
    currentPage = (Math.ceil(currentNumberOfWinners / 10));
  }

  if (currentPage === 1) {
    btnNext.disabled = true;
    btnPrev.disabled = true;
  }

  if (currentPage === pageNumber) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }

  if (pageNumber === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
}
