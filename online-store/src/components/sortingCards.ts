/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function sortingSelect(value: string) {
  const select = document.querySelector('select') as HTMLSelectElement;
  const indexSelected = select.selectedIndex;
  const option = select.querySelectorAll('option')[indexSelected];
  const selectedValue = option.getAttribute('value');
  const parentCards = document.querySelector('.right-side') as HTMLElement;

  if ( selectedValue == 'value1' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (parentCards.children[i].getAttribute('data-name')! > parentCards.children[j].getAttribute('data-name')!) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', selectedValue);
  }
  if ( selectedValue == 'value2' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (parentCards.children[i].getAttribute('data-name')! < parentCards.children[j].getAttribute('data-name')!) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', selectedValue);
  }
  if ( selectedValue == 'value3' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (Number(parentCards.children[i].getAttribute('data-sort')) > Number(parentCards.children[j].getAttribute('data-sort'))) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', selectedValue);
  }
  if ( selectedValue == 'value4' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (Number(parentCards.children[i].getAttribute('data-sort')) < Number(parentCards.children[j].getAttribute('data-sort'))) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', option.value);
  }
}



// /* eslint-disable @typescript-eslint/indent */
// import { Filter } from './interfaces/interface';
// import { product } from './card';
// import Card from './generateCard';


// export default class FilterSort {

//   private compareArrays(sourceArray: Array<Filter>, filter: Array<string | boolean>) {
//     const sortedArray: Filter[] = [];
  
//     sourceArray.forEach((el) => {
//       const arrObject = Object.values(el);
//       for (let i = 0; i < filter.length; i++) {
//         if (filter[i] !== false) {
//           if (arrObject.indexOf(filter[i]) !== -1) {
//             sortedArray.push(el);
//           }
//         } 
//       }
//     });
//     return sortedArray.length > 0 ? sortedArray : [];
//   }

//   setting(parent: string) { 
//     const parentInput = document.querySelector(parent) as HTMLDivElement;
//     const childInput = parentInput.getElementsByTagName('input');
//     const settingsArr: string[] = [];
//     for (let i = 0; i < childInput.length; i++) {
//       if (childInput[i].checked) {
//         settingsArr.push(childInput[i].name);
//       } 
//     }
//     return settingsArr;
//   }

//   sorting(arr1: string[], arr2: string[]) {
//     const arr = arr1.concat(arr2);
//     const sortedArray: Array<Filter> = [];
//     const arrNumber = arr.map((el) => Number(el));
    
//     product.forEach((el) => {
//       const arrObject = Object.values(el);
//       const price = parseInt(arrObject[1]);
//       const year = parseInt(arrObject[2]);

//       if (arrNumber[0] <= price && arrNumber[1] >= price && arrNumber[2] <= year && arrNumber[3] >= year) {
//         sortedArray.push(el);
//       }
//     });
//     this.checboxChecked(sortedArray);
//   }

//   checboxChecked(arr1: Array<Filter>) {
//     const activeCheckbox: Array<string | boolean> = [];
//     const filterChek = document.querySelector('.filter') as HTMLDivElement;
//     const currentCheckbox = filterChek.querySelectorAll('input');

//     currentCheckbox.forEach((el) => { 
//       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//       el.checked ? activeCheckbox.push(el.name) : activeCheckbox.push(false);
//     });


//       // const arrOffer = activeCheckbox.slice(0, 2);
//       // const arrDecor = activeCheckbox.slice(2, 7);
//       // const arrInsert = activeCheckbox.slice(7, 11);
//       // const arrMetall = activeCheckbox.slice(11);
 
//       // const arrOffer: [key: string]: Array<string | boolean>[] = offer : [activeCheckbox.slice(0, 2)];
//       // const arrDecor: { [key: string]: Array<string | boolean>[] } = { decor : [activeCheckbox.slice(2, 7) ] };
//       // const arrInsert: { [key: string]: Array<string | boolean>[] } = { insert : [activeCheckbox.slice(7, 11)] };
//       // const arrMetall: { [key: string]: Array<string | boolean>[] } = { metall : [activeCheckbox.slice(11)] };

// const obj = { offer : [activeCheckbox.slice(0, 2)], decor : [activeCheckbox.slice(2, 7)], 
//   insert : [activeCheckbox.slice(7, 11)], metall : [activeCheckbox.slice(11)] };

//     this.filterSettings(arr1, obj);
//   }

//   // filterSettings(arr: Array<Filter>, arr1: Array<string | boolean>[]) {
//     filterSettings(arr: Array<Filter>, arr1: { [key:string] : Array<string | boolean>[] }) {
//       for (const key in arr1) {
//         // eslint-disable-next-line no-empty
//         switch (key) {
//           case 'offer':
            
//         }
//       }

//     // Offer
//     // if (typeof arr1[0][0] === 'string' || typeof arr1[0][1] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[0]);
//     // }
//     // if (typeof arr1[1][0] === 'string' || typeof arr1[1][1] === 'string' || typeof arr1[1][2] === 'string' || typeof arr1[1][3] === 'string' || typeof arr1[1][4] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[1]);
//     // }
//     // if (typeof arr1[2][0] === 'string' || typeof arr1[2][1] === 'string' || typeof arr1[2][2] === 'string' || typeof arr1[2][3] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[2]);
//     // }
//     // if (typeof arr1[3][0] === 'string' || typeof arr1[3][1] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[3]);
//     // }



//     // Offer
//     // if (typeof arr1[0][0] === 'string' || typeof arr1[0][1] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[0]);
//     // }
//     // if (typeof arr1[1][0] === 'string' || typeof arr1[1][1] === 'string' || typeof arr1[1][2] === 'string' || typeof arr1[1][3] === 'string' || typeof arr1[1][4] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[1]);
//     // }
//     // if (typeof arr1[2][0] === 'string' || typeof arr1[2][1] === 'string' || typeof arr1[2][2] === 'string' || typeof arr1[2][3] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[2]);
//     // }
//     // if (typeof arr1[3][0] === 'string' || typeof arr1[3][1] === 'string') {
//     //   arr = this.compareArrays(arr, arr1[3]);
//     // }

//     if (arr.length === 0) {
//       new Card().drawText();
//     } else {
//       new Card().draw(arr);
//     }
//   }
// }