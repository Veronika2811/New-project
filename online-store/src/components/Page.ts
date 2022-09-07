import './main_page.scss';
import { DOM } from './interfaces/enum';
import * as noUiSlider from 'nouislider';
import Modal from './layouts/Modal';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import { MAX_PRICE_RANGE, MAX_YEAR_RANGE, MIN_PRICE_RANGE, MIN_YEAR_RANGE, STEP_RANGE } from './constants/constants';
import listenerInit from './listeners/listenerInit';

export default class Page {
  private main: string = DOM.main;

  mainRender() {
    const headerBlock = <HTMLElement>document.querySelector('header');
    headerBlock.insertAdjacentHTML('afterend', this.main);
  }

  rangePriceRender() {
    const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;

    let startPrice = [MIN_PRICE_RANGE, MAX_PRICE_RANGE];

    if (localStorage.getItem('price') !== null) {
      startPrice = JSON.parse(localStorage.getItem('price') as string);
    }

    noUiSlider.create(rangeSliderPrice, {
      start: startPrice,
      connect: true,
      step: STEP_RANGE,
      range: {
        'min': MIN_PRICE_RANGE,
        'max': MAX_PRICE_RANGE,
      },
    });
  }

  rangeYearRender() {
    const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;
    let startYear = [MIN_YEAR_RANGE, MAX_YEAR_RANGE];

    if (localStorage.getItem('price') !== null) {
      startYear = JSON.parse(localStorage.getItem('year') as string);
    }
  
    noUiSlider.create(rangeSliderYear, {
      start: startYear,
      connect: true,
      step: STEP_RANGE,
      range: {
        'min': MIN_YEAR_RANGE,
        'max': MAX_YEAR_RANGE,
      },
    });
  }

  pageRender() {
    new Header();
    this.mainRender();
    this.rangePriceRender();
    this.rangeYearRender();
    new Modal();
    new Footer();
    listenerInit();
  }
}

