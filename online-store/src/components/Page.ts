import './main_page.scss';
import { DOM } from './interfaces/enum';
import * as noUiSlider from 'nouislider';
import { Listener } from './ListenerPage';
import Modal from './layouts/Modal';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import { MAX_PRICE_RANGE, MAX_YEAR_RANGE, MIN_PRICE_RANGE, MIN_YEAR_RANGE, STEP_RANGE } from './constants/constants';

export default class Page {
  private main: string = DOM.main;

  createMain() {
    const headerBlock = <HTMLElement>document.querySelector('header');
    headerBlock.insertAdjacentHTML('afterend', this.main);
  }

  createRange() {
    const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;
    const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;

    // Price
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

    // Year
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

  createPage() {
    new Header();
    this.createMain();
    this.createRange();
    new Modal();
    new Footer();
    new Listener().listenerAll();
  }
}

