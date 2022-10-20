import * as noUiSlider from 'nouislider';

export default function resetRange() {
  const rangeSliderPrice = document.getElementById('range-slider-price') as noUiSlider.target;
  const rangeSliderYear = document.getElementById('range-slider-year') as noUiSlider.target;
  rangeSliderPrice.noUiSlider?.set(['20', '200']);
  rangeSliderYear.noUiSlider?.set(['2010', '2022']);
}