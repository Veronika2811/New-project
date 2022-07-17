
import FilterSort from './filterSorting';
import { sortingSelect } from './sortingCards';
import * as noUiSlider from 'nouislider';
import { searchCard } from './search';


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
      });

      value = (event.target as HTMLInputElement).value.trim();
      localStorage.setItem('search', JSON.stringify(value));
      
      searchCard(value);
    });

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

      searchCard(value);
    });
  }

  listenerCart() {
    // const cart = document.querySelectorAll('.block-cart');
    // const itemcart = document.querySelector('.items-the-cart') as HTMLSpanElement;

    // if (localStorage.getItem('cart') !== null) {
    //   itemcart.innerHTML = JSON.parse(localStorage.getItem('cart')!);
    // }

    // let activeCardName: string[] = [];

    // if (localStorage.getItem('activeCard') !== null) {
    //   activeCardName = JSON.parse(localStorage.getItem('activeCard')!);
    //   // const cart = document.querySelectorAll('.block-cart');
    //   cart.forEach((el) => {
    //     if (activeCardName.includes(el.parentElement?.dataset.name as string)) {
    //       el.classList.add('active-card');
    //     }
    //   });
    // }

    // cart.forEach((el) => {
  
    //   el.addEventListener('click', () => {
    //     const nameCard = el.parentElement?.dataset.name as string;
    
    //     if (el.classList.contains('active-card')) {
    //       el.classList.remove('active-card');
    
    //       if (activeCardName.length > 0) {
    //         activeCardName = activeCardName.filter(function (f) { 
    //           return f !== nameCard;
    //         });
    //       } 
    //       itemcart.innerHTML = String(activeCardName.length);
    //       localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
    //       localStorage.setItem('activeCard', JSON.stringify(activeCardName));
    //     } else {
    //       el.classList.add('active-card');
    //       activeCardName.push(nameCard);
    //       itemcart.innerHTML = String(activeCardName.length);
    //       localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
    //       localStorage.setItem('activeCard', JSON.stringify(activeCardName));
    //     }
    //   });
    // });
  }

  listenerAll() {
    this.listenerRange();
    this.listenerSort();
    this.listenerButton();
    this.listenerSearch();
    // this.listenerAll();
  }
}
