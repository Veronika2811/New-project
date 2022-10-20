import resetRange from '../resetFilters/resetRange';
import resetSearchBar from '../resetFilters/resetSearchBar';
import resetCheckboxes from '../resetFilters/resetСheckboxes';

export default function filtersResetbtnListener() {
  const btnClearFilter = document.querySelector('.btn_reset-filter') as HTMLButtonElement;

  btnClearFilter.addEventListener('click', () => {
    resetCheckboxes();
    resetRange();
    resetSearchBar();
  });
}

