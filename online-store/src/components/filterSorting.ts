import ProductInformation from './interfaces/interface';
import Card from './Cards';
import sortingSelect from './helpers/sortingCards';
import { searchCard } from './helpers/search';
import checkedCheck from './helpers/checkedCheckbox';
import activeCardAndCart from './helpers/activeCardAndCart';
import filterGoodsByPriceAndYearRange from './filterGoods/filterGoodsByPriceAndYearRange';

export default class FilterSort {
  public goods;
  
  constructor(items: ProductInformation[]) {
    this.goods = items;
  }

  compareArrays(
    sourceArray: Array<ProductInformation>,
    filter: Array<string | boolean>,
  ) {
    const sortedArray: ProductInformation[] = [];

    sourceArray.forEach((obj) => {
      if (
        filter.includes(obj.offer) &&
        filter.includes(obj.decoration) &&
        filter.includes(obj.insert) &&
        filter.includes(obj.metall)
      ) {
        sortedArray.push(obj);
      }
    });
    return sortedArray;
  }

  sortByRange(arrPrice: string[], arrYear: string[]) {
    const sortedArrayByRange: Array<ProductInformation> = filterGoodsByPriceAndYearRange(this.goods, arrPrice, arrYear);

    if (sortedArrayByRange.length > 0) {
      this.selectedСheckboxes(sortedArrayByRange);
    } else {
      new Card().drawText();
    }
  }

  selectedСheckboxes(sortedArrayByRange: Array<ProductInformation>) {
    const filterChek = document.querySelector('.filter') as HTMLDivElement;
    const currentCheckbox = filterChek.querySelectorAll('input');

    const selectedCheckboxesObject = checkedCheck(currentCheckbox);

    this.filterSettings(sortedArrayByRange, selectedCheckboxesObject);
  }

  filterSettings(
    sortedArray: Array<ProductInformation>,
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

      if (localStorage.getItem('option') !== null) {
        sortingSelect(localStorage.getItem('option') as string);
      }

      if (localStorage.getItem('search') !== null) {
        searchCard(JSON.parse(localStorage.getItem('search') as string));
      }

      activeCardAndCart();
    }
  }
}
