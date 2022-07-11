import { Filter } from '../interfaces/interface';
import { product } from './generate-card/card';
import Card from './generate-card/generateCard';

export default class FilterSort {

  private compareArrays(sourceArray: Array<Filter>, filter: string[]) {
    const sortedArray: Filter[] = [];
  
    sourceArray.forEach((e) => {
      const arrObject = Object.values(e);
      const indexArr: number[] = [];
  
      for (let i = 0; i < filter.length; i++) {
        if (arrObject.indexOf(filter[i]) !== -1) {
          indexArr.push(arrObject.indexOf(filter[i]));
        }
      }
  
      if (indexArr.length === filter.length) {
        sortedArray.push(e);
      }
    });
  
    return sortedArray.length > 0 ? sortedArray : [];
  }

  sorting(arr1: string[], arr2: string[]) {
    const arr = arr1.concat(arr2);
    const sortedArray: Array<Filter> = [];
    const arrNumber = arr.map((el) => Number(el));
    
    product.forEach((el) => {
      const arrObject = Object.values(el);
      const price = parseInt(arrObject[1]);
      const year = parseInt(arrObject[2]);

      if (arrNumber[0] <= price && arrNumber[1] >= price && arrNumber[2] <= year && arrNumber[3] >= year) {
        sortedArray.push(el);
      }
    });

    if (sortedArray.length !== 0) {
      this.filterSettings(sortedArray);
    } else {
      new Card().drawText();
    }
  }

  filterSettings(arr: Array<Filter>) {
    const currentCheckbox = document.querySelectorAll('input');
    
    console.log(Array.from(currentCheckbox).some(input => input.checked));

    
    currentCheckbox.forEach((el) => {
      el.addEventListener('input', () => {
        // console.log(Array.from(currrentCheckbox).some(input => input.checked));
        const currentSettings: string[] = [];

        for (let i = 0; i < currentCheckbox.length; i++) {
          if (currentCheckbox[i].checked) {
            currentSettings.push(currentCheckbox[i].name);
          } 
        }

        const resultArray = this.compareArrays(arr, currentSettings);

        return resultArray.length > 0 ? new Card().draw(resultArray) : new Card().drawText();
      });
    });
  }
}