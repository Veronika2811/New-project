import resetRange from '../helpers/resetFilters/resetRange';
import resetSearchBar from '../helpers/resetFilters/resetSearchBar';
import resetCheckboxes from '../helpers/resetFilters/resetСheckboxes';

export default function filtersResetbtnListener() {
  const btnClearFilter = document.querySelector('.btn_reset-filter') as HTMLButtonElement;

  btnClearFilter.addEventListener('click', () => {
    resetCheckboxes();
    resetRange();
    resetSearchBar();
  });
}

