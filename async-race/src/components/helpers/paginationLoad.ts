import { Loader } from '../controller/loader';
import { btnNext, btnPrev, btnNextWin, btnPrevWin } from '../view/pagination/pagination';

export async function loadPagination(pageNum: number | undefined) {
  const carsObj = await new Loader().getCars(pageNum);
  const currentPage = (Math.ceil(Number(carsObj?.count) / 7));
  
  if (currentPage === 1) {
    btnNext.disabled = true;
    btnPrev.disabled = true;
  }
  
  if (currentPage === pageNum) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }

  if (pageNum === 1) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
}

export async function loadPaginationWin(pageNum: number) {
  const carsObj = await new Loader().getWinners({ page: pageNum });
  // console.log((Math.ceil(Number(carsObj?.count) / 10))
  const currentPage = (Math.ceil(Number(carsObj?.count) / 10));
  
  if (currentPage === 1) {
    btnNextWin.disabled = true;
    btnPrevWin.disabled = true;
  }
  
  if (currentPage === pageNum) {
    btnNextWin.disabled = true;
  } else {
    btnNextWin.disabled = false;
  }

  if (pageNum === 1) {
    btnPrevWin.disabled = true;
  } else {
    btnPrevWin.disabled = false;
  }
}