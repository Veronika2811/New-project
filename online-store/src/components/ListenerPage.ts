
import FilterSort from './filterSorting';
import { sortingSelect } from './helpers/sortingCards';
import * as noUiSlider from 'nouislider';
import { searchCard } from './helpers/search';


export class Listener {
  listenerRange() {
    const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;
    const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;

    let currentRangePrice: string[] = [];
    let currentRangeYear: string[] = [];

    // Price
    const minPrice = document.getElementById('input-min-price') as HTMLInputElement;
    const maxPrice = document.getElementById('input-max-price') as HTMLInputElement;
    const inputsPrice = [minPrice, maxPrice];

    rangeSliderPrice.noUiSlider?.on('update', (values, handle) =>  {
      currentRangePrice = [];
      for (let i = 0; i < values.length; i++) {
        currentRangePrice.push(String(Math.round(Number(values[i]))));
      }

      inputsPrice[handle].value = currentRangePrice[handle] as string;
      localStorage.setItem('price', JSON.stringify(currentRangePrice));
      new FilterSort().sorting(currentRangePrice, currentRangeYear);
    });

    // Year
    const minYear = document.getElementById('input-3') as HTMLInputElement;
    const maxYear = document.getElementById('input-4') as HTMLInputElement;
    const inputsYear = [minYear, maxYear];

    rangeSliderYear.noUiSlider?.on('update', (values, handle) =>  {
      currentRangeYear = [];
      for (let i = 0; i < values.length; i++) {
        currentRangeYear.push(String(Math.round(Number(values[i]))));
      }

      inputsYear[handle].value = currentRangeYear[handle] as string;
      localStorage.setItem('year', JSON.stringify(currentRangeYear));
      new FilterSort().sorting(currentRangePrice, currentRangeYear);
    });

    const filterChek = document.querySelector('.filter') as HTMLDivElement;
    const currentCheckbox = filterChek.querySelectorAll('input');
    
    currentCheckbox.forEach((el) => {
      el.oninput = () => {
        new FilterSort().sorting(currentRangePrice, currentRangeYear);
        localStorage.setItem(el.id, JSON.stringify(el.checked));
      };
      el.checked = localStorage.getItem(el.id) === 'true';
      new FilterSort().sorting(currentRangePrice, currentRangeYear);
    });
  }

  listenerSort() {
    const select = document.querySelector('select') as HTMLSelectElement;

    let value;
    if (localStorage.getItem('option') !== null) {
      value = localStorage.getItem('option') as string;
    } else {
      value = 'value1';
    }

    select.onchange = () => {
      sortingSelect(select.value);
    };

    document.querySelector('.sort-params > option[selected]')?.removeAttribute('selected');
    document.querySelector(`.sort-params > option[value=${value}]`)?.setAttribute('selected', 'selected');
    sortingSelect(value);
  }

  listenerSearch() {
    const inputSearch = document.querySelector('.search') as HTMLInputElement;

    let value = '';
    if (localStorage.getItem('search') !== null) {
      value = JSON.parse(localStorage.getItem('search') as string);
    }

    inputSearch?.addEventListener('input', (event) => {
      inputSearch.addEventListener('search', () => {
        (document.querySelector('.warning') as HTMLHeadElement).style.display = 'none';
        document.querySelectorAll('.card').forEach((el) => {
          el.classList.remove('hide');
        });
      });

      value = (event.target as HTMLInputElement).value.trim().toLowerCase();
      localStorage.setItem('search', JSON.stringify(value));
      
      searchCard(value);
    });

    inputSearch.value = value;
    searchCard(value);
  }

  listenerButton() {
    // Clear Local Storage
    const btnClearStorage = document.querySelector('.btn_reset') as HTMLButtonElement;

    btnClearStorage.addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });

    // Clear filter
    const btnClearFilter = document.querySelector('.btn_reset-filter') as HTMLButtonElement;

    btnClearFilter.addEventListener('click', () => {
      const filterChek = document.querySelector('.filter') as HTMLDivElement;
      const currentCheckbox = filterChek.querySelectorAll('input');
      
      // Checkbox
      currentCheckbox.forEach((el) => {
        if (el.checked) {
          el.checked = localStorage.getItem(el.id) === 'false';
          localStorage.setItem(el.id, JSON.stringify(el.checked));
        }
      });

      // Range
      const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;
      const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;
      rangeSliderPrice.noUiSlider?.set(['20', '200']);
      rangeSliderYear.noUiSlider?.set(['2010', '2022']);

      // Input search
      const inputSearch = document.querySelector('.search') as HTMLInputElement;
      const value = inputSearch.value = '';
      localStorage.setItem('search', JSON.stringify(value));
      (document.querySelector('.warning') as HTMLHeadElement).style.display = 'none';
      (document.querySelectorAll('.card')).forEach((el) => {
        el.classList.remove('hide');
      });
    });

    // Modal close
    const modalClose = document.querySelector('.modal__btn-close') as HTMLButtonElement;
    const overlay = document.querySelector('.overlay') as HTMLButtonElement;

    modalClose.addEventListener('click', () => {
      (document.querySelector('.modal') as HTMLDivElement).style.display = 'none';
      (document.querySelector('.body') as HTMLHeadElement).classList.remove('open');
    });
    overlay.addEventListener('click', () => {
      (document.querySelector('.modal') as HTMLDivElement).style.display = 'none';
      (document.querySelector('.body') as HTMLHeadElement).classList.remove('open');
    });
  }

  listenerAll() {
    this.listenerRange();
    this.listenerSort();
    this.listenerButton();
    this.listenerSearch();
  }
}
