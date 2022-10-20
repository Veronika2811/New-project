import * as noUiSlider from 'nouislider';
import FilterSort from '../../components/FilterSort';
import { goods } from '../../goods/goods';

export default function rangeAndCheckboxesListener() {
  const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;
  const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;

  let currentRangePrice: string[] = [];
  let currentRangeYear: string[] = [];

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
    new FilterSort(goods).sortByRange(currentRangePrice, currentRangeYear);
  });

  const minYear = document.getElementById('input-min-year') as HTMLInputElement;
  const maxYear = document.getElementById('input-max-year') as HTMLInputElement;
  const inputsYear = [minYear, maxYear];

  rangeSliderYear.noUiSlider?.on('update', (values, handle) =>  {
    currentRangeYear = [];
    for (let i = 0; i < values.length; i++) {
      currentRangeYear.push(String(Math.round(Number(values[i]))));
    }

    inputsYear[handle].value = currentRangeYear[handle] as string;
    localStorage.setItem('year', JSON.stringify(currentRangeYear));
    new FilterSort(goods).sortByRange(currentRangePrice, currentRangeYear);
  });

  const filterChek = document.querySelector('.filter') as HTMLDivElement;
  const currentCheckbox = filterChek.querySelectorAll('input');
  
  currentCheckbox.forEach((el) => {
    el.oninput = () => {
      new FilterSort(goods).sortByRange(currentRangePrice, currentRangeYear);
      localStorage.setItem(el.id, JSON.stringify(el.checked));
    };
    el.checked = localStorage.getItem(el.id) === 'true';
    new FilterSort(goods).sortByRange(currentRangePrice, currentRangeYear);
  });
}
