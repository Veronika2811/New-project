// import { getData } from './components/app';
// // import { product } from './components/card';

// document.addEventListener('DOMContentLoaded', getData);

import './global.scss';
import Page from './components/Page';
import Card from './components/generateCard';

new Page().createPage();

// const nav = document.querySelector('.right-side') as HTMLElement;

// window.addEventListener('load', () => {
//   document.querySelector('.sort-params')!.querySelectorAll('option')[0].selected = true;
//   for (let i = 0; i < nav.children.length; i++) {
//     for (let j = i; j < nav.children.length; j++) {
//       if (nav.children[i].getAttribute('data-name')! > nav.children[j].getAttribute('data-name')!) {
//         const replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
//         nav.children[i].parentNode?.insertBefore(replacedNode, nav.children[i].nextSibling);
//       }
//     }
//   }
// });

// let activeCheckbox: Array<string | boolean> = [];

// function filterProduct() {
//   // productArr.forEach((el) => {
    
//   // });
// }

// const filterChek = document.querySelector('.filter') as HTMLDivElement;
// const currentCheckbox = filterChek.querySelectorAll('input');

// currentCheckbox.forEach((el) => {
//   el.addEventListener('input', () => {
//     if (activeCheckbox.length >= 13) {
//       activeCheckbox = [];
//     }
    
//     for (let i = 0; i < currentCheckbox.length; i++) {
//       if (currentCheckbox[i].checked) {
//         activeCheckbox.push(currentCheckbox[i].name);
//       } else {
//         activeCheckbox.push(false);
//       }
//     }

//     console.log(activeCheckbox);
//     filterProduct();



//   });
// // }


// const arrayOfParams = ['Популярное', 'Кольцо'];
// let obgNew: Array<Filter> = [];

// product.forEach((obj) => {
  
//   if ( arrayOfParams.includes(obj.offer) || && arrayOfParams.includes(obj.decoration) && arrayOfParams.includes(obj.typeInsert) || arrayOfParams.includes(obj.typeMetall)) {
//     obgNew.push(obj);
//   }
  
//   // arrayOfParams.contains(obj.offer)  arrayOfPa..contains(obj.decoration)
// });
// console.log(obgNew);

// const select = document.querySelector('select') as HTMLSelectElement;

// function sort() {
//   const nodeList = document.querySelectorAll('.card');
//   const itemsArray = [];
//   const parent = nodeList[0].parentNode as HTMLElement;
//   for (let i = 0; i < nodeList.length; i++) {    
//     itemsArray.push(parent.removeChild(nodeList[i]));
//   }

  
//   // itemsArray.sort (a, b) {
//   //   console.log(nodeList.children.querySelector('h3').textContent);
//   //     // const textA = nodeA.querySelector('div:nth-child(2)').textContent;
//   //     // var textB = nodeB.querySelector('div:nth-child(2)').textContent;
//   //     // var numberA = parseInt(textA);
//   //     // var numberB = parseInt(textB);
//   //     // if (numberA < numberB) return -1;
//   //     // if (numberA > numberB) return 1;
//   //     // return 0;
//   //   })
//     // .forEach(function(node) {
//     //   parent.appendChild(node)
//     // });
// }

// select.onchange = function () {
//   const items = document.querySelectorAll('.card');
//   const parent = document.querySelector('.right-side') as HTMLElement;
//   const option = select.querySelectorAll('option')[select.selectedIndex];

//   const selectedId = option.getAttribute('id');

//   if ( selectedId == '2' ) {
//     sort(); 
//   }
// };


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

//   new FilterSort().sorting(currentRangePrice, currentRangeYear);
// });

// import { Filter } from './components/interfaces/interface';
// const card = document.querySelectorAll('.block-cart');  
// // eslint-disable-next-line @typescript-eslint/no-shadow
// card.forEach((el) => {

//   const activeArr: Array<Filter> = [];
//   el.addEventListener('click', () => {

//     if (el.classList.contains('active-card')) {
//       el.classList.remove('active-card');
//       const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
//       const warn = document.querySelector('.warning') as HTMLElement;
//       let currentCart = Number(cardBig.textContent);
//       currentCart--;
//       warn.textContent = '';
//       cardBig.innerHTML = String((currentCart));


//       const parent = el.parentElement;
//       const nameCard = parent!.querySelector('h3');
//       // eslint-disable-next-line @typescript-eslint/no-shadow
//       product.forEach((el) => {
//         if (el.name === nameCard?.textContent) {
//           delete el.active;
//         }
//       });

//     } else {
//       const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
//       const warn = document.querySelector('.warning') as HTMLElement;
//       let currentCart = Number(cardBig.textContent);
  
//       if (currentCart >= 20) {
//         warn.textContent = 'Извините, все слоты заполнены';
    
//       } else {
//         currentCart++;
//         cardBig.innerHTML = String((currentCart));
//         warn.textContent = '';
//         el.classList.add('active-card');



//         const parent = el.parentElement;
//         const nameCard = parent!.querySelector('h3');

//         // eslint-disable-next-line @typescript-eslint/no-shadow
//         product.forEach((el) => {
          
//           if (el.name === nameCard?.textContent) {
//             el.active = true;
//             activeArr.push(el);
//           }


//         });



//       }
//       console.log(activeArr);
//     }
//     // product.forEach((el) => {
//     //   // if (el.name === nameCard?.textContent) {
//     //   //   el.active = true;
//     //     console.log(el);
//     //   // }
//     // });
//   });
  
// });


// // const activeCard: Filter[] = [];
// // product.forEach((el) => {
// //   if (typeof el.active !== 'undefined' && el.active === true) {
// //     activeCard.push(el);
// //   }
// // });
// // console.log(activeCard);

// // card.forEach((el) => {
// //   if (el.classList.contains('active-card')) {
    
// //   }
// // })

// function insertMark(string: string, pos: number, len: number) {
//   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }

// const inputSearch = document.querySelector('.search') as HTMLInputElement;

// inputSearch.oninput = function () {
//   const val = inputSearch.value.replace(/\s/g, '');

//   const name = document.querySelectorAll('.name');
  
//   if (val != '') {
//     name.forEach((el) => {
//       const parentCard = el.parentElement;
//       if ((el as HTMLElement).innerText.search(val) == -1) {
//         parentCard!.classList.add('hide');
//         el.innerHTML = (el as HTMLElement).innerText;
//       } else {
//         el.classList.remove('hide');
//         const str = (el as HTMLElement).innerText;
//         el.innerHTML = insertMark(str, (el as HTMLElement).innerText.search(val), val.length);
//       }
//     });
//   } else {
//     name.forEach((el) => {
//       const parentCard = el.parentElement;
//       parentCard!.classList.remove('hide');
//       el.innerHTML = (el as HTMLElement).innerText;
//     });
//   }
// };