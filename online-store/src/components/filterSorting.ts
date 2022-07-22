import { Filter } from './interfaces/interface';
import { products } from './card';
import Card from './Cards';
import { sortingSelect } from './helpers/sortingCards';
import { searchCard } from './helpers/search';
import checkedCheck from './helpers/checkedCheckbox';
import activeCardAndCart from './helpers/activeCardAndCart';

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

  sortByRange(arrPrice: string[], arrYear: string[]) {
    const arrPriceAndYear = arrPrice.concat(arrYear);
    const arrNumber = arrPriceAndYear.map((el) => Number(el));

    const sortedArrayByRange: Array<Filter> = [];

    products.forEach((el) => {
      const price = el.price;
      const year = el.year;

      if (
        arrNumber[0] <= price &&
        arrNumber[1] >= price &&
        arrNumber[2] <= year &&
        arrNumber[3] >= year
      ) {
        sortedArrayByRange.push(el);
      }
    });

    if (sortedArrayByRange.length === 0) {
      new Card().drawText();
    } else {
      this.selectedСheckboxes(sortedArrayByRange);
    }
  }

  selectedСheckboxes(sortedArrayByRange: Array<Filter>) {
    const filterChek = document.querySelector('.filter') as HTMLDivElement;
    const currentCheckbox = filterChek.querySelectorAll('input');

    const selectedCheckboxesObject = checkedCheck(currentCheckbox);

    this.filterSettings(sortedArrayByRange, selectedCheckboxesObject);
  }

  filterSettings(
    sortedArray: Array<Filter>,
    selectedCheckboxesObject: { [key: string]: (string | boolean)[] },
  ) {
    if (selectedCheckboxesObject.offer.length !== 0) {
      sortedArray = this.compareArrays(sortedArray, selectedCheckboxesObject.offer);
    }

    if (selectedCheckboxesObject.decor.length !== 0) {
      sortedArray = this.compareArrays(sortedArray, selectedCheckboxesObject.decor);
    }

    if (selectedCheckboxesObject.insert.length !== 0) {
      sortedArray = this.compareArrays(sortedArray, selectedCheckboxesObject.insert);
    }

    if (selectedCheckboxesObject.metall.length !== 0) {
      sortedArray = this.compareArrays(sortedArray, selectedCheckboxesObject.metall);
    }

    if (sortedArray.length === 0) {
      new Card().drawText();
    } else {
      new Card().draw(sortedArray);

      // Sorting
      if (localStorage.getItem('option') !== null) {
        sortingSelect(localStorage.getItem('option') as string);
      } else {
        sortingSelect('value1');
      }

      // Search card
      if (localStorage.getItem('search') !== null) {
        searchCard(JSON.parse(localStorage.getItem('search') as string));
      }

      // Active card and cart
      activeCardAndCart();
    }

  }
}
