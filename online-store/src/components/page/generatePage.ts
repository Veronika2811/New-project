/* eslint-disable @typescript-eslint/indent */
import './header.scss';
import './catalogFilter.scss';
import './footer.scss';
import './noUiSlider.scss';
import '../../components/page/generate-card/catalogList.scss';
import { DOM } from '../interfaces/enum';
import * as noUiSlider from 'nouislider';
import { product } from './generate-card/card';
// import { Filter } from '../interfaces/interface';
import Card from './generate-card/generateCard';
import FilterSort from './filterSorting';
// // import { sort } from '../..';
// // import { sorting } from '../../index';

// // const arr = ['gbh', 'hhj'];

// // sorting(arr);

// function sort(arr: Array<Filter>) {

//   function filter(arrIs: Array<Filter>, arrSv: string[]) {
//     // const newArrResult: Filter[] = [];
  
//     // // eslint-disable-next-line @typescript-eslint/no-shadow
//     // arrIs.forEach((e) => {
//     //   const arrRes = Object.values(e);
      
//     //   for (let i = 0; i < arrSv.length; i++) {
//     //     if (arrRes.indexOf(arrSv[i]) !== -1) {
//     //       newArrResult.push(e);
//     //     }
//     //   }
//     // });
  
//     // return newArrResult.length > 0 ? newArrResult : arrIs;
  
//     const newArrResult: Filter[] = [];
    
  
//     // eslint-disable-next-line @typescript-eslint/no-shadow
//     arrIs.forEach((e) => {
//       const arrRes = Object.values(e);
//   // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
//       let arrIndex: any[] = [];
      
//       for (let i = 0; i < arrSv.length; i++) {
        
//         if (arrRes.indexOf(arrSv[i]) !== -1) {
//           arrIndex.push(arrRes.indexOf(arrSv[i]));
//           // newArrResult.push(e);
//         }
//       }
//       if (arrIndex.length === arrSv.length) {
//         newArrResult.push(e);
//       }
      
//     });
  
//   // console.log(newArrResult);
//     return newArrResult.length > 0 ? newArrResult : arrIs;
//   }


//   const currrentCheckbox = document.querySelectorAll('input');

//   // if (Array.from(currrentCheckbox).some(input => input.checked === false) {

//   // }

  
//   currrentCheckbox.forEach((el) => {
//     el.addEventListener('input', () => {
//       console.log(Array.from(currrentCheckbox).some(input => input.checked));
  
  
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   // function filter(arrIs: Array<Filter>, arrSv: string[]) {
//   //   // const newArrResult: Filter[] = [];
  
//   //   // // eslint-disable-next-line @typescript-eslint/no-shadow
//   //   // arrIs.forEach((e) => {
//   //   //   const arrRes = Object.values(e);
      
//   //   //   for (let i = 0; i < arrSv.length; i++) {
//   //   //     if (arrRes.indexOf(arrSv[i]) !== -1) {
//   //   //       newArrResult.push(e);
//   //   //     }
//   //   //   }
//   //   // });
  
//   //   // return newArrResult.length > 0 ? newArrResult : arrIs;
  
//   //   const newArrResult: Filter[] = [];
    
  
//   //   // eslint-disable-next-line @typescript-eslint/no-shadow
//   //   arrIs.forEach((e) => {
//   //     const arrRes = Object.values(e);
//   // // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
//   //     let arrIndex: any[] = [];
      
//   //     for (let i = 0; i < arrSv.length; i++) {
        
//   //       if (arrRes.indexOf(arrSv[i]) !== -1) {
//   //         arrIndex.push(arrRes.indexOf(arrSv[i]));
//   //         // newArrResult.push(e);
//   //       }
//   //     }
//   //     if (arrIndex.length === arrSv.length) {
//   //       newArrResult.push(e);
//   //     }
      
//   //   });
  
//   // // console.log(newArrResult);
//   //   return newArrResult.length > 0 ? newArrResult : arrIs;
//   // }
  
//   // filter(product, mas);
  
//   let res: Array<Filter>;
//   const popular = document.querySelector('.settings-offer') as HTMLDivElement;
//   const inpy = popular.getElementsByTagName('input');
//   const mas: string[] = [];
//   for (let i = 0; i < inpy.length; i++) {
//     if (inpy[i].checked) {
//       mas.push(inpy[i].name);
//     } 
//   }
  
//   // eslint-disable-next-line prefer-const
//   res = filter(arr, mas);
  
//   let resDeco: Array<Filter>;
//   const decoration = document.querySelector('.settings-decoration') as HTMLDivElement;
//   const inpy1 = decoration.getElementsByTagName('input');
//   const mas1: string[] = [];
//   for (let i = 0; i < inpy1.length; i++) {
//     if (inpy1[i].checked) {
//       mas1.push(inpy1[i].name);
//     } 
//   }
  
//   if (res.length > 0) {
//     resDeco = filter(res, mas1);
//   } else {
//     resDeco = filter(arr, mas1);
//   }
  
//   // new Card().draw(resDeco);
  
//   let resInsert: Array<Filter>;
//   const insert = document.querySelector('.settings-insert') as HTMLDivElement;
//   const inpy2 = insert.getElementsByTagName('input');
//   const mas2: string[] = [];
//   for (let i = 0; i < inpy2.length; i++) {
//     if (inpy2[i].checked) {
//       mas2.push(inpy2[i].name);
//     } 
//   }
  
//   if (resDeco.length > 0) {
//     resInsert = filter(resDeco, mas2);
//   } else {
//     resInsert = filter(arr, mas2);
//   }
  
//   // new Card().draw(resInsert);
  
//   let resMetall: Array<Filter>;
//   const metall = document.querySelector('.settings-metall') as HTMLDivElement;
//   const inpy3 = metall.getElementsByTagName('input');
//   const mas3: string[] = [];
//   for (let i = 0; i < inpy3.length; i++) {
//     if (inpy3[i].checked) {
//       mas3.push(inpy3[i].name);
//     } 
//   }
  
//   if (resInsert.length > 0) {
//     resMetall = filter(resInsert, mas3);
//   } else {
//     resMetall = filter(arr, mas3);
//   }
  
//   const leftSide = document.querySelector('.right-side') as HTMLDivElement;
  
//   leftSide.innerHTML = '';
  
//   new Card().draw(resMetall);
  
  
//   // leftSide.prepend(newCard);
  
//   // const rightsi = document.querySelector('.right-side');
  
//   // rightsi?.addEventListener('click', toogle);
  
  
//   const card = document.querySelectorAll('.cart-product');
  
  
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
  
//   });
//   });

//   // function filter(arrIs: Array<Filter>, arrSv: string[]) {
//   //   // const newArrResult: Filter[] = [];
  
//   //   // // eslint-disable-next-line @typescript-eslint/no-shadow
//   //   // arrIs.forEach((e) => {
//   //   //   const arrRes = Object.values(e);
      
//   //   //   for (let i = 0; i < arrSv.length; i++) {
//   //   //     if (arrRes.indexOf(arrSv[i]) !== -1) {
//   //   //       newArrResult.push(e);
//   //   //     }
//   //   //   }
//   //   // });
  
//   //   // return newArrResult.length > 0 ? newArrResult : arrIs;
  
//   //   const newArrResult: Filter[] = [];
    
  
//   //   // eslint-disable-next-line @typescript-eslint/no-shadow
//   //   arrIs.forEach((e) => {
//   //     const arrRes = Object.values(e);
//   // // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
//   //     let arrIndex: any[] = [];
      
//   //     for (let i = 0; i < arrSv.length; i++) {
        
//   //       if (arrRes.indexOf(arrSv[i]) !== -1) {
//   //         arrIndex.push(arrRes.indexOf(arrSv[i]));
//   //         // newArrResult.push(e);
//   //       }
//   //     }
//   //     if (arrIndex.length === arrSv.length) {
//   //       newArrResult.push(e);
//   //     }
      
//   //   });
  
//   // // console.log(newArrResult);
//   //   return newArrResult.length > 0 ? newArrResult : arrIs;
//   // }
  
//   // filter(product, mas);
  
//   let res: Array<Filter>;
//   const popular = document.querySelector('.settings-offer') as HTMLDivElement;
//   const inpy = popular.getElementsByTagName('input');
//   const mas: string[] = [];
//   for (let i = 0; i < inpy.length; i++) {
//     if (inpy[i].checked) {
//       mas.push(inpy[i].name);
//     } 
//   }
  
//   // eslint-disable-next-line prefer-const
//   res = filter(arr, mas);
  
//   let resDeco: Array<Filter>;
//   const decoration = document.querySelector('.settings-decoration') as HTMLDivElement;
//   const inpy1 = decoration.getElementsByTagName('input');
//   const mas1: string[] = [];
//   for (let i = 0; i < inpy1.length; i++) {
//     if (inpy1[i].checked) {
//       mas1.push(inpy1[i].name);
//     } 
//   }
  
//   if (res.length > 0) {
//     resDeco = filter(res, mas1);
//   } else {
//     resDeco = filter(arr, mas1);
//   }
  
//   // new Card().draw(resDeco);
  
//   let resInsert: Array<Filter>;
//   const insert = document.querySelector('.settings-insert') as HTMLDivElement;
//   const inpy2 = insert.getElementsByTagName('input');
//   const mas2: string[] = [];
//   for (let i = 0; i < inpy2.length; i++) {
//     if (inpy2[i].checked) {
//       mas2.push(inpy2[i].name);
//     } 
//   }
  
//   if (resDeco.length > 0) {
//     resInsert = filter(resDeco, mas2);
//   } else {
//     resInsert = filter(arr, mas2);
//   }
  
//   // new Card().draw(resInsert);
  
//   let resMetall: Array<Filter>;
//   const metall = document.querySelector('.settings-metall') as HTMLDivElement;
//   const inpy3 = metall.getElementsByTagName('input');
//   const mas3: string[] = [];
//   for (let i = 0; i < inpy3.length; i++) {
//     if (inpy3[i].checked) {
//       mas3.push(inpy3[i].name);
//     } 
//   }
  
//   if (resInsert.length > 0) {
//     resMetall = filter(resInsert, mas3);
//   } else {
//     resMetall = filter(arr, mas3);
//   }
  
//   const leftSide = document.querySelector('.right-side') as HTMLDivElement;
  
//   leftSide.innerHTML = '';
  
//   new Card().draw(resMetall);


// }
  

// // function filter(arrIs: Array<Filter>, arrSv: string[]) {
// //   const newArrResult: Filter[] = [];

// //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   arrIs.forEach((e) => {
// //     const arrRes = Object.values(e);
    
// //     for (let i = 0; i < arrSv.length; i++) {
// //       if (arrRes.indexOf(arrSv[i]) !== -1) {
// //         newArrResult.push(e);
// //       }
// //     }
// //   });

// //   return newArrResult.length > 0 ? newArrResult : arrIs;
// // }

export default class Page {
  public header: string = DOM.header;

  public main: string = DOM.main;

  readonly footer: string = DOM.footer;

  createHeader() {
    document.body.insertAdjacentHTML('afterbegin', this.header);
  }

  createMain() {
    const headerBlock = <HTMLElement>document.querySelector('header');
    headerBlock.insertAdjacentHTML('afterend', this.main);
  }

  // sorting(arr: string[] = ['10', '30']) {

  //   let arrRes1: Array<Filter> = [];
    
  //   const min = Number(arr[0]);
  //   const max = Number(arr[1]);


  //   if (arr.length === 2) {
  //     // const newArr = arr.map((el) => Number(el));
    
  //     product.forEach((el) => {
  //       const arrRes = Object.values(el);
  //       const count = parseInt(arrRes[1]);

  //       if (min && max) {
  //         if (min <= count && max >= count) {
  //           arrRes1.push(el);
  //         } 
  //       }

  //     });
  //   }

  //   if (arrRes1.length === 0) {
  //     arrRes1 = product;
  //   }

  //   // sort(arrRes1);
  // }

  createRange() {
    const rangeSlider = document.getElementById('range-slider') as noUiSlider.target;
    const rangeSlider2 = document.getElementById('range-slider-2') as noUiSlider.target;
    let settingPrice: string[] = [];
    let settingYear: string[] = [];

    noUiSlider.create(rangeSlider, {
      start: [20, 200],
      connect: true,
      step: 1,
      range: {
        'min': 20,
        'max': 200,
      },
    });
    
    const input0 = document.getElementById('input-1') as HTMLInputElement;
    const input1 = document.getElementById('input-2') as HTMLInputElement;
    const inputs = [input0, input1];
    
    let newVal1: string[] = [];

    rangeSlider.noUiSlider?.on('update', (values, handle) =>  {
      newVal1 = [];
      for (let i = 0; i < values.length; i++) {
        newVal1.push(String(Math.round(Number(values[i]))));
      }

      inputs[handle].value = newVal1[handle] as string;

      if (settingPrice.length >= 2 || settingPrice.length === 0) {
        settingPrice = [];
        settingPrice = newVal1;
        // console.log(settingPrice);
        new FilterSort().sorting(settingPrice, settingYear);
      }
    });

    

    noUiSlider.create(rangeSlider2, {
      start: [2010, 2022],
      connect: true,
      step: 1,
      range: {
        'min': 2010,
        'max': 2022,
      },
    });

    const input3 = document.getElementById('input-3') as HTMLInputElement;
    const input4 = document.getElementById('input-4') as HTMLInputElement;
    const inputs1 = [input3, input4];

    rangeSlider2.noUiSlider?.on('update', (values, handle) =>  {
      const newVal2: string[] = [];
      for (let i = 0; i < values.length; i++) {
        newVal2.push(String(Math.round(Number(values[i]))));
      }

      inputs1[handle].value = newVal2[handle] as string;

      if (settingYear.length >= 2 || settingYear.length === 0) {
        settingYear = [];
        settingYear = newVal2;
        // console.log(settingYear);
        new FilterSort().sorting(settingPrice, settingYear);
      }
    });
    
    // console.log(newVal1, newVal2);

  }


  createFooter() {
    document.body.insertAdjacentHTML('beforeend', this.footer);
  }

  gener() {
    new Card().draw(product);
    // const fragment = <DocumentFragment>document.createDocumentFragment();

    // const newsItemTemp = <HTMLTemplateElement>document.querySelector('.card');

    // product.forEach((item: Filter) => {
    //   const newsClone = <DocumentFragment>newsItemTemp.content.cloneNode(true);

    //   (<HTMLDivElement>newsClone.querySelector('.card-image')).style.backgroundImage = `url(${
    //     item.image })`;
    //   (<HTMLLIElement>newsClone.querySelector('.name')).textContent = item.name;
    //   (<HTMLLIElement>newsClone.querySelector('.price span')).textContent = item.price;
    //   (<HTMLLIElement>newsClone.querySelector('.year-issue span')).textContent = item.year;
    //   (<HTMLLIElement>newsClone.querySelector('.type-decoration span')).textContent = item.decoration;
    //   (<HTMLLIElement>newsClone.querySelector('.type-insert span')).textContent = item.typeInsert;
    //   (<HTMLLIElement>newsClone.querySelector('.type-metall span')).textContent = item.typeMetall;

    //   fragment.append(newsClone);
    // });
    // (<HTMLDivElement>document.querySelector('.right-side')).appendChild(fragment);
  }
  

  createPage() {
    this.createHeader();
    this.createMain();
    this.createRange();
    this.gener();
    this.createFooter();
    // new FilterSort().sorting();
  }
}
