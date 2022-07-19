import { Filter } from './interfaces/interface';
import { products } from './card';
import Card from './Cards';
import { sortingSelect } from './helpers/sortingCards';
import { searchCard } from './helpers/search';

export default class FilterSort {
  compareArrays(
    sourceArray: Array<Filter>,
    filter: Array<string | boolean>,
  ) {
    const sortedArray: Filter[] = [];

    sourceArray.forEach((obj) => {
      if (
        filter.includes(obj.offer) ||
        filter.includes(obj.decoration) ||
        filter.includes(obj.insert) ||
        filter.includes(obj.metall)
      ) {
        sortedArray.push(obj);
      }
    });
    return sortedArray.length > 0 ? sortedArray : [];
  }

  sorting(arrPrice: string[], arrYear: string[]) {
    const arr = arrPrice.concat(arrYear);
    const sortedArray: Array<Filter> = [];
    const arrNumber = arr.map((el) => Number(el));

    products.forEach((el) => {
      const arrObject = Object.values(el);
      const price = arrObject[1];
      const year = arrObject[2] as number;

      if (
        arrNumber[0] <= price &&
        arrNumber[1] >= price &&
        arrNumber[2] <= year &&
        arrNumber[3] >= year
      ) {
        sortedArray.push(el);
      }
    });

    if (sortedArray.length === 0) {
      new Card().drawText();
    } else {
      this.checboxChecked(sortedArray);
    }
  }

  checboxChecked(arr1: Array<Filter>) {
    let activeCheckboxObj: { [key: string]: Array<string> } = {
      offer: [],
      decor: [],
      insert: [],
      metall: [],
    };

    const filterChek = document.querySelector('.filter') as HTMLDivElement;
    const currentCheckbox = filterChek.querySelectorAll('input');

    currentCheckbox.forEach((el) => {
      if (el.checked) {
        if (el.value === 'offer') {
          activeCheckboxObj.offer.push(el.name);
        }
        if (el.value === 'decoration') {
          activeCheckboxObj.decor.push(el.name);
        }
        if (el.value === 'typeInsert') {
          activeCheckboxObj.insert.push(el.name);
        }
        if (el.value === 'typeMetall') {
          activeCheckboxObj.metall.push(el.name);
        }
      }
    });

    localStorage.setItem('setting', JSON.stringify(activeCheckboxObj));

    if (localStorage.getItem('setting') !== null) {
      activeCheckboxObj = JSON.parse(localStorage.getItem('setting') as string);
    }

    this.filterSettings(arr1, activeCheckboxObj);
  }

  filterSettings(
    arr: Array<Filter>,
    arr1: { [key: string]: (string | boolean)[] },
  ) {
    if (arr1.offer.length !== 0) {
      arr = this.compareArrays(arr, arr1.offer);
    }

    if (arr1.decor.length !== 0) {
      arr = this.compareArrays(arr, arr1.decor);
    }

    if (arr1.insert.length !== 0) {
      arr = this.compareArrays(arr, arr1.insert);
    }

    if (arr1.metall.length !== 0) {
      arr = this.compareArrays(arr, arr1.metall);
    }

    if (arr.length === 0) {
      new Card().drawText();
    } else {
      new Card().draw(arr);

      // Sorting
      let value: string;
      if (localStorage.getItem('option') !== null) {
        value = localStorage.getItem('option') as string;
      } else {
        value = 'value1';
      }
      sortingSelect(value);

      // Search card
      // let valueSearch = '';
      if (localStorage.getItem('search') !== null) {
        searchCard(JSON.parse(localStorage.getItem('search') as string));
      }
      // searchCard(valueSearch);

      // Cart
      const itemcart = document.querySelector('.items-the-cart') as HTMLSpanElement;

      if (localStorage.getItem('cart') !== null) {
        itemcart.innerHTML = JSON.parse(localStorage.getItem('cart') as string);
      }

      // Active card
      const cart = document.querySelectorAll('.block-cart');
      if (localStorage.getItem('activeCard') !== null) {
        const activeCard = JSON.parse(
          localStorage.getItem('activeCard') as string);
        cart.forEach((el) => {
          if (activeCard.includes(el.parentElement?.dataset.name)) {
            el.classList.add('active-card');
          }
        });
      }

      let activeCardName: string[] = [];

      if (localStorage.getItem('activeCard') !== null) {
        activeCardName = JSON.parse(
          localStorage.getItem('activeCard') as string);
        cart.forEach((el) => {
          if (
            activeCardName.includes(el.parentElement?.dataset.name as string)
          ) {
            el.classList.add('active-card');
          }
        });
      }

      cart.forEach((el) => {
        el.addEventListener('click', () => {
          const nameCard = el.parentElement?.dataset.name as string;

          if (el.classList.contains('active-card')) {
            el.classList.remove('active-card');

            if (activeCardName.length > 0) {
              activeCardName = activeCardName.filter(function (f) {
                return f !== nameCard;
              });
            }
            itemcart.innerHTML = String(activeCardName.length);
            // (document.querySelector('.warning') as HTMLHeadElement).style.display = 'none';

            localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
            localStorage.setItem('activeCard', JSON.stringify(activeCardName));
          } else {
            if (Number(itemcart.innerHTML) >= 20) {
              (
                document.querySelector('.modal') as HTMLHeadElement
              ).style.display = 'block';
              (
                document.querySelector('.body') as HTMLHeadElement
              ).classList.add('open');
            } else if (Number(itemcart.innerHTML) < 20) {
              (
                document.querySelector('.modal') as HTMLHeadElement
              ).style.display = 'none';
              (
                document.querySelector('.body') as HTMLHeadElement
              ).classList.remove('open');
              el.classList.add('active-card');
              activeCardName.push(nameCard);
              itemcart.innerHTML = String(activeCardName.length);
            }

            localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
            localStorage.setItem('activeCard', JSON.stringify(activeCardName));
          }
        });
      });
    }
  }
}
