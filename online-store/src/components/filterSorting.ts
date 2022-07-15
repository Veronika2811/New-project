/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Filter } from './interfaces/interface';
import { product } from './card';
import Card from './generateCard';
import { sortingSelect } from './sortingCards';
import { searchCard } from './search';

export default class FilterSort {

  private compareArrays(sourceArray: Array<Filter>, filter: Array<string | boolean>) {
    const sortedArray: Filter[] = [];

    sourceArray.forEach((obj)=> {
      if (filter.includes(obj.offer) || filter.includes(obj.decoration) 
          || filter.includes(obj.typeInsert) || filter.includes(obj.typeMetall)) {
        sortedArray.push(obj);
      }
    });
  
    // sourceArray.forEach((el) => {
    //   const arrObject = Object.values(el);
    //   for (let i = 0; i < filter.length; i++) {
    //     if (filter[i] !== false) {
    //       if (arrObject.indexOf(filter[i]) !== -1) {
    //         sortedArray.push(el);
    //       }
    //     } 
    //   }
    // });
    // console.log(sortedArray);
    return sortedArray.length > 0 ? sortedArray : [];
  }

  // setting(parent: string) { 
  //   const parentInput = document.querySelector(parent) as HTMLDivElement;
  //   const childInput = parentInput.getElementsByTagName('input');
  //   const settingsArr: string[] = [];
  //   for (let i = 0; i < childInput.length; i++) {
  //     if (childInput[i].checked) {
  //       settingsArr.push(childInput[i].name);
  //     } 
  //   }
  //   return settingsArr;
  // }

  sorting(arrPrice: string[], arrYear: string[]) {
    const arr = arrPrice.concat(arrYear);
    const sortedArray: Array<Filter> = [];
    const arrNumber = arr.map((el) => Number(el));

    product.forEach((el) => {
      const arrObject = Object.values(el);
      const price = parseInt(arrObject[1]);
      const year = parseInt(arrObject[2]) as number;

      if (arrNumber[0] <= price && arrNumber[1] >= price && arrNumber[2] <= year && arrNumber[3] >= year) {
        sortedArray.push(el);
      }
    });
    this.checboxChecked(sortedArray);
  }

  checboxChecked(arr1: Array<Filter>) {
    let activeCheckboxObj: { [key: string] : Array<string> } = { offer : [], decor : [], 
      insert : [], metall : [] };

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
        localStorage.setItem('setting', JSON.stringify(activeCheckboxObj));
      }
    });

    if (localStorage.getItem('setting') !== null) {
      activeCheckboxObj = JSON.parse(localStorage.getItem('setting')!);
    }

    this.filterSettings(arr1, activeCheckboxObj);
  }
  
  filterSettings(arr: Array<Filter>, arr1: { [key:string] : string[] }) {
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

      let value = 'value1';
      if (localStorage.getItem('option') !== null) {
        value = localStorage.getItem('option')!;
      }
      sortingSelect(value);

      let valueSearch = '';
      if (localStorage.getItem('search') !== null) {
        valueSearch = JSON.parse(localStorage.getItem('search')!);
      }
      searchCard(valueSearch);
    }
  }

  // sort() {
  // // Sorting
  //   const select = document.querySelector('select') as HTMLSelectElement;

  //   select.onchange = function () {
  //     // sortingSelect();
  //     // const card = document.querySelectorAll('.card');
  //     // eslint-disable-next-line @typescript-eslint/no-shadow
  //     const select = document.querySelector('select') as HTMLSelectElement;
  //     const indexSelected = select.selectedIndex,
  //       option = select.querySelectorAll('option')[indexSelected];
  //     const selectedValue = option.getAttribute('value');
  //     // console.log(selectedValue)
  //     sortingSelect(selectedValue!);
  //     // const nav = document.querySelector('.right-side') as HTMLElement;

  //     // // console.log(selectedId);

  //     // if ( selectedId == '1' ) {
  //     //   for (let i = 0; i < nav.children.length; i++) {
  //     //     for (let j = i; j < nav.children.length; j++) {
  //     //       if (nav.children[i].getAttribute('data-name')! > nav.children[j].getAttribute('data-name')!) {
  //     //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //     //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
  //     //       }
  //     //     }
  //     //   }
  //     //   // console.log(option.value)
  //     //   localStorage.setItem('option', option.value);
  //     // }
  //     // if ( selectedId == '2' ) {
  //     //   for (let i = 0; i < nav.children.length; i++) {
  //     //     for (let j = i; j < nav.children.length; j++) {
  //     //       if (nav.children[i].getAttribute('data-name')! < nav.children[j].getAttribute('data-name')!) {
  //     //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //     //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
  //     //       }
  //     //     }
  //     //   }
  //     //   localStorage.setItem('option', option.value);
  //     // }
  //     // if ( selectedId == '3' ) {
  //     //   for (let i = 0; i < nav.children.length; i++) {
  //     //     for (let j = i; j < nav.children.length; j++) {
  //     //       if (Number(nav.children[i].getAttribute('data-sort')) > Number(nav.children[j].getAttribute('data-sort'))) {
  //     //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //     //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
  //     //       }
  //     //     }
  //     //   }
  //     //   localStorage.setItem('option', option.value);
  //     // }
  //     // if ( selectedId == '4' ) {
  //     //   for (let i = 0; i < nav.children.length; i++) {
  //     //     for (let j = i; j < nav.children.length; j++) {
  //     //       if (Number(nav.children[i].getAttribute('data-sort')) < Number(nav.children[j].getAttribute('data-sort'))) {
  //     //         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
  //     //         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
  //     //       }
  //     //     }
  //     //   }
  //     //   localStorage.setItem('option', option.value);
  //     // }
  //   // localStorage.setItem('option', selectedId);
  //   };
  // }
}