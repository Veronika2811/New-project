/* eslint-disable @typescript-eslint/indent */
import { getData } from './components/app';

document.addEventListener('DOMContentLoaded', getData);

import Page from './components/page/generatePage';

new Page().createPage();

// import FilterSort from './components/page/filterSorting';

// new FilterSort().sortingPrice();

import './global.scss';





// const card = document.querySelectorAll('.cart-product');  
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   card.forEach((el) => {
//     el.addEventListener('click', () => {
//       if (el.classList.contains('active-card')) {
//         el.classList.remove('active-card');
//         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
//         const warn = document.querySelector('.warning') as HTMLElement;
//         let currentCart = Number(cardBig.textContent);
//         currentCart--;
//         warn.textContent = '';
//         cardBig.innerHTML = String((currentCart));
//       } else {
  
//         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
//         const warn = document.querySelector('.warning') as HTMLElement;
//         let currentCart = Number(cardBig.textContent);
  
//         if (currentCart >= 20) {
//           warn.textContent = 'Извините, все слоты заполнены';
    
//         } else {
//           currentCart++;
//           cardBig.innerHTML = String((currentCart));
//           warn.textContent = '';
//           el.classList.add('active-card');
//         }
//       }
//     });
//   });
import { Filter } from './components/interfaces/interface';
import { product } from './components/page/generate-card/card';

const decoration = ['Заколка', 'Кольцо', 'Серьги', 'Цепочка', 'Браслет'];
const offer = ['Новинка', 'Популярное'];
const insert = ['Жемчуг', 'Без вставки',  'Бриллиант', 'Фианит'];
const metall = ['Золото', 'Серебро'];
// const seting = [['Заколка', 'Кольцо', 'Серьги', 'Цепочка', 'Браслет'], ['Новинка' || 'Популярное'], 
// ['Жемчуг', 'Без вставки',  'Бриллиант', 'Фианит'], ['Золото' || 'Серебро']];

function compareArrays(sourceArray: Array<Filter>, filter: string[]) {
  const sortedArray: Filter[] = [];
  
    sourceArray.forEach((e) => {
      const arrObject = Object.values(e);
      const indexArr: number[] = [];
  
      for (let i = 0; i < filter.length; i++) {
        // decoration
        // if (arrObject.indexOf(filter[i]) !== -1) {
          // sortedArray.push(e)
          // indexArr.push(arrObject.indexOf(filter[i]));
          // console.log(filter[i]);
        // }
      }
      // console.log(indexArr);
      // if (indexArr.length === filter.length) {
      //   sortedArray.push(e);
      // }
    });
  console.log(sortedArray);
    // return sortedArray.length > 0 ? sortedArray : [];
}

compareArrays(product, ['Кольцо', 'Заколка']);