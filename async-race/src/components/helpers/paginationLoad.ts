import { Loader } from '../controller/loader';
import { btnNext, btnPrev } from '../view/pagination/pagination';

export default async function loadPagination(pageNum: number | undefined) {
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