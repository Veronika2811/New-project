/* eslint-disable @typescript-eslint/no-non-null-assertion */
import FilterSort from './filterSorting';
import { sortingSelect } from './sortingCards';
import * as noUiSlider from 'nouislider';


export class Listener {
  listenerRange() {
    const rangeSliderPrice = document.getElementById('range-slider') as noUiSlider.target;
    const rangeSliderYear = document.getElementById('range-slider-2') as noUiSlider.target;

    // Price
    const minPrice = document.getElementById('input-1') as HTMLInputElement;
    const maxPrice = document.getElementById('input-2') as HTMLInputElement;
    const inputsPrice = [minPrice, maxPrice];
    
    let currentRangePrice: string[] = [];
    let currentRangeYear: string[] = [];

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
    });

  }

  listenerSort() {
    const select = document.querySelector('select') as HTMLSelectElement;

    let value = 'value1';
    if (localStorage.getItem('option') !== null) {
      value = localStorage.getItem('option')!;
    }

    select.onchange = function () {
      const indexSelected = select.selectedIndex;
      const option = select.querySelectorAll('option')[indexSelected];
      value = option.getAttribute('value')!;
      sortingSelect(value!);
    };

    document.querySelector('.sort-params > option[selected]')?.removeAttribute('selected');
    document.querySelector(`.sort-params > option[value=${value}]`)?.setAttribute('selected', 'selected');
    sortingSelect(value);
  }

  listenerButton() {
    // Clear Local Storage
    const btnClearStorage = document.querySelector('.btn_reset') as HTMLButtonElement;

    btnClearStorage.addEventListener('click', () => {
      localStorage.clear();
    });
  }

  listenerAll() {
    this.listenerRange();
    this.listenerSort();
    this.listenerButton();

  }
}
