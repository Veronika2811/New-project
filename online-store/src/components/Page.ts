import './main_page.scss';
import { DOM } from './interfaces/enum';
import * as noUiSlider from 'nouislider';
import { Listener } from './ListenerPage';
import Modal from './layouts/Modal';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

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
    let startPrice = [20, 200];

    if (localStorage.getItem('price') !== null) {
      startPrice = JSON.parse(localStorage.getItem('price') as string);
    }

    noUiSlider.create(rangeSliderPrice, {
      start: startPrice,
      connect: true,
      step: 1,
      range: {
        'min': 20,
        'max': 200,
      },
    });

    // Year
    let startYear = [2010, 2022];

    if (localStorage.getItem('price') !== null) {
      startYear = JSON.parse(localStorage.getItem('year') as string);
    }

    noUiSlider.create(rangeSliderYear, {
      start: startYear,
      connect: true,
      step: 1,
      range: {
        'min': 2010,
        'max': 2022,
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

