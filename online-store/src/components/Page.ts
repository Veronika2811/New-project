/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './main_page.scss';
import { DOM } from './interfaces/enum';
import * as noUiSlider from 'nouislider';
// import FilterSort from './filterSorting';
// import { productArr } from './app';
// import { sortingSelect } from './sortingCards';
import { Listener } from './ListenerPage';

export default class Page {
  private header: string = DOM.header;

  public main: string = DOM.main;

  private footer: string = DOM.footer;

  createHeader() {
    document.body.insertAdjacentHTML('afterbegin', this.header);
  }

  createMain() {
    const headerBlock = <HTMLElement>document.querySelector('header');
    headerBlock.insertAdjacentHTML('afterend', this.main);
  }

  createRange() {
    const rangeSliderPrice = document.getElementById('range-slider') as noUiSlider.target;
    const rangeSliderYear = document.getElementById('range-slider-2') as noUiSlider.target;

    // Price
    let startPrice = [20, 200];
    if (localStorage.getItem('price') != null) {
      startPrice = JSON.parse(localStorage.getItem('price')!);
    }

    let startYear = [2010, 2022];
    if (localStorage.getItem('price') != null) {
      startYear = JSON.parse(localStorage.getItem('year')!);
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
    
    // const minPrice = document.getElementById('input-1') as HTMLInputElement;
    // const maxPrice = document.getElementById('input-2') as HTMLInputElement;
    // const inputsPrice = [minPrice, maxPrice];
    
    // let currentRangePrice: string[] = [];
    // let currentRangeYear: string[] = [];

    // rangeSliderPrice.noUiSlider?.on('update', (values, handle) =>  {
    //   currentRangePrice = [];
    //   for (let i = 0; i < values.length; i++) {
    //     currentRangePrice.push(String(Math.round(Number(values[i]))));
    //   }

    //   inputsPrice[handle].value = currentRangePrice[handle] as string;
    //   localStorage.setItem('price', JSON.stringify(currentRangePrice));
    //   new FilterSort().sorting(currentRangePrice, currentRangeYear);
    // });

    // Year
    noUiSlider.create(rangeSliderYear, {
      start: startYear,
      connect: true,
      step: 1,
      range: {
        'min': 2010,
        'max': 2022,
      },
    });

    // const minYear = document.getElementById('input-3') as HTMLInputElement;
    // const maxYear = document.getElementById('input-4') as HTMLInputElement;
    // const inputsYear = [minYear, maxYear];

    // rangeSliderYear.noUiSlider?.on('update', (values, handle) =>  {
    //   currentRangeYear = [];
    //   for (let i = 0; i < values.length; i++) {
    //     currentRangeYear.push(String(Math.round(Number(values[i]))));
    //   }

    //   inputsYear[handle].value = currentRangeYear[handle] as string;
    //   localStorage.setItem('year', JSON.stringify(currentRangeYear));
    //   new FilterSort().sorting(currentRangePrice, currentRangeYear);
    // });

    // const filterChek = document.querySelector('.filter') as HTMLDivElement;
    // const currentCheckbox = filterChek.querySelectorAll('input');
    
    // currentCheckbox.forEach((el) => {
    //   el.oninput = () => {
    //     console.log(el);
    //     new FilterSort().sorting(currentRangePrice, currentRangeYear);
    //     localStorage.setItem(el.id, JSON.stringify(el.checked));
    //   };
    //   el.checked = localStorage.getItem(el.id) === 'true';
    // });

    // el.addEventListener('input', () => {
    //   // if (el.checked) {
    //   //   // checkedCheckbox.push(el.name);
    //   //   // checkedInput.push(el.name);
    //   new FilterSort().sorting(currentRangePrice, currentRangeYear);
    //   // }
        
    //   // new FilterSort().sorting(currentRangePrice, currentRangeYear);
    // });
    

    // document.querySelectorAll('.custom-checkbox').forEach(el => {
    //   el.onchange = () => localStorage.setItem(el.id, el.checked);
    //   el.checked = localStorage.getItem(el.id) === "true";
    // })
    // localStorage.setItem('range', JSON.stringify(settingPrice));
    

  }


  createFooter() {
    document.body.insertAdjacentHTML('beforeend', this.footer);
  }

  createPage() {
    this.createHeader();
    this.createMain();
    this.createRange();
    this.createFooter();



    // new FilterSort().sort();
    
    // let value = 'value1';
    // if (localStorage.getItem('option') !== null) {
    //   value = localStorage.getItem('option')!;
    // }


    // const select = document.getElementsByTagName('.sort-params');
    // const options = select.getElementsByTagName('option');

    // document.querySelector('.sort-params > option[selected]')!.removeAttribute('selected');
    // document.querySelector(`.sort-params > option[value=${value}]`)!.setAttribute('selected', 'selected');
    // sortingSelect(value);

    new Listener().listenerAll();
    // const nav = document.querySelector('.right-side') as HTMLElement;

    // if ( value == 'value1' ) {
    //   for (let i = 0; i < nav.children.length; i++) {
    //     for (let j = i; j < nav.children.length; j++) {
    //       if (nav.children[i].getAttribute('data-name')! > nav.children[j].getAttribute('data-name')!) {
    //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
    //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
    //       }
    //     }
    //   }
    // // localStorage.setItem('option', option.value);
    // }
    // if ( value == 'value2' ) {
    //   for (let i = 0; i < nav.children.length; i++) {
    //     for (let j = i; j < nav.children.length; j++) {
    //       if (nav.children[i].getAttribute('data-name')! < nav.children[j].getAttribute('data-name')!) {
    //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
    //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
    //       }
    //     }
    //   }
    // // localStorage.setItem('option', option.value);
    // }
    // if ( value == 'value3' ) {
    //   for (let i = 0; i < nav.children.length; i++) {
    //     for (let j = i; j < nav.children.length; j++) {
    //       if (Number(nav.children[i].getAttribute('data-sort')) > Number(nav.children[j].getAttribute('data-sort'))) {
    //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
    //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
    //       }
    //     }
    //   }
    // // localStorage.setItem('option', option.value);
    // }
    // if ( value == 'value4' ) {
    //   for (let i = 0; i < nav.children.length; i++) {
    //     for (let j = i; j < nav.children.length; j++) {
    //       if (Number(nav.children[i].getAttribute('data-sort')) < Number(nav.children[j].getAttribute('data-sort'))) {
    //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
    //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
    //       }
    //     }
    //   }

    // // localStorage.setItem('option', option.value);
    // }
    // this.listner();

    // if ()

    // const btnLocal = document.querySelector('.btn_reset') as HTMLButtonElement;


    // btnLocal.addEventListener('click', () => {
    //   // console.log('hi');
    //   localStorage.clear();
    // });


    // const btnView = document.querySelector('. btn_view') as HTMLButtonElement;

    // btnView.addEventListener('click', () => {
    //   const filterChek = document.querySelector('.filter') as HTMLDivElement;
    //   const currentCheckbox = filterChek.querySelectorAll('input');
    
    //   currentCheckbox.forEach((el) => {

    //   });
    //   // localStorage.clear();
    // });
   

    // document.querySelector('.sort-params').value = value;
    // console.log(document.querySelector(`.sort-params > option[value=[${value}]`));
    // document.querySelector('.sort-params > option[selected]')!.removeAttribute('selected');
    // document.querySelector(`.sort-params > option[value='${value}']`)!.setAttribute('selected', 'selected');
    // localStorage.getItem('option');
  }
}

