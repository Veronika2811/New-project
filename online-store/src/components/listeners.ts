// /* eslint-disable @typescript-eslint/indent */
// // const card = document.querySelectorAll('.cart-product');  
// //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   card.forEach((el) => {
// //     el.addEventListener('click', () => {
// //       if (el.classList.contains('active-card')) {
// //         el.classList.remove('active-card');
// //         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //         const warn = document.querySelector('.warning') as HTMLElement;
// //         let currentCart = Number(cardBig.textContent);
// //         currentCart--;
// //         warn.textContent = '';
// //         cardBig.innerHTML = String((currentCart));
// //       } else {

// import { Filter } from './interfaces/interface';
// import { product } from './card';

  
// //         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //         const warn = document.querySelector('.warning') as HTMLElement;
// //         let currentCart = Number(cardBig.textContent);
  
// //         if (currentCart >= 20) {
// //           warn.textContent = 'Извините, все слоты заполнены';
    
// //         } else {
// //           currentCart++;
// //           cardBig.innerHTML = String((currentCart));
// //           warn.textContent = '';
// //           el.classList.add('active-card');
// //         }
// //       }
// //     });
// //   });
// // import { Filter } from './components/interfaces/interface';
// // import { product } from './components/page/generate-card/card';




// // // import { sort } from '../..';
// // // import { sorting } from '../../index';

// // // const arr = ['gbh', 'hhj'];

// // // sorting(arr);

// // function sort(arr: Array<Filter>) {

// //   function filter(arrIs: Array<Filter>, arrSv: string[]) {
// //     // const newArrResult: Filter[] = [];
  
// //     // // eslint-disable-next-line @typescript-eslint/no-shadow
// //     // arrIs.forEach((e) => {
// //     //   const arrRes = Object.values(e);
      
// //     //   for (let i = 0; i < arrSv.length; i++) {
// //     //     if (arrRes.indexOf(arrSv[i]) !== -1) {
// //     //       newArrResult.push(e);
// //     //     }
// //     //   }
// //     // });
  
// //     // return newArrResult.length > 0 ? newArrResult : arrIs;
  
// //     const newArrResult: Filter[] = [];
    
  
// //     // eslint-disable-next-line @typescript-eslint/no-shadow
// //     arrIs.forEach((e) => {
// //       const arrRes = Object.values(e);
// //   // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
// //       let arrIndex: any[] = [];
      
// //       for (let i = 0; i < arrSv.length; i++) {
        
// //         if (arrRes.indexOf(arrSv[i]) !== -1) {
// //           arrIndex.push(arrRes.indexOf(arrSv[i]));
// //           // newArrResult.push(e);
// //         }
// //       }
// //       if (arrIndex.length === arrSv.length) {
// //         newArrResult.push(e);
// //       }
      
// //     });
  
// //   // console.log(newArrResult);
// //     return newArrResult.length > 0 ? newArrResult : arrIs;
// //   }


// //   const currrentCheckbox = document.querySelectorAll('input');

// //   // if (Array.from(currrentCheckbox).some(input => input.checked === false) {

// //   // }

  
// //   currrentCheckbox.forEach((el) => {
// //     el.addEventListener('input', () => {
// //       console.log(Array.from(currrentCheckbox).some(input => input.checked));
  
  
// //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   // function filter(arrIs: Array<Filter>, arrSv: string[]) {
// //   //   // const newArrResult: Filter[] = [];
  
// //   //   // // eslint-disable-next-line @typescript-eslint/no-shadow
// //   //   // arrIs.forEach((e) => {
// //   //   //   const arrRes = Object.values(e);
      
// //   //   //   for (let i = 0; i < arrSv.length; i++) {
// //   //   //     if (arrRes.indexOf(arrSv[i]) !== -1) {
// //   //   //       newArrResult.push(e);
// //   //   //     }
// //   //   //   }
// //   //   // });
  
// //   //   // return newArrResult.length > 0 ? newArrResult : arrIs;
  
// //   //   const newArrResult: Filter[] = [];
    
  
// //   //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   //   arrIs.forEach((e) => {
// //   //     const arrRes = Object.values(e);
// //   // // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
// //   //     let arrIndex: any[] = [];
      
// //   //     for (let i = 0; i < arrSv.length; i++) {
        
// //   //       if (arrRes.indexOf(arrSv[i]) !== -1) {
// //   //         arrIndex.push(arrRes.indexOf(arrSv[i]));
// //   //         // newArrResult.push(e);
// //   //       }
// //   //     }
// //   //     if (arrIndex.length === arrSv.length) {
// //   //       newArrResult.push(e);
// //   //     }
      
// //   //   });
  
// //   // // console.log(newArrResult);
// //   //   return newArrResult.length > 0 ? newArrResult : arrIs;
// //   // }
  
// //   // filter(product, mas);
  
// //   let res: Array<Filter>;
// //   const popular = document.querySelector('.settings-offer') as HTMLDivElement;
// //   const inpy = popular.getElementsByTagName('input');
// //   const mas: string[] = [];
// //   for (let i = 0; i < inpy.length; i++) {
// //     if (inpy[i].checked) {
// //       mas.push(inpy[i].name);
// //     } 
// //   }
  
// //   // eslint-disable-next-line prefer-const
// //   res = filter(arr, mas);
  
// //   let resDeco: Array<Filter>;
// //   const decoration = document.querySelector('.settings-decoration') as HTMLDivElement;
// //   const inpy1 = decoration.getElementsByTagName('input');
// //   const mas1: string[] = [];
// //   for (let i = 0; i < inpy1.length; i++) {
// //     if (inpy1[i].checked) {
// //       mas1.push(inpy1[i].name);
// //     } 
// //   }
  
// //   if (res.length > 0) {
// //     resDeco = filter(res, mas1);
// //   } else {
// //     resDeco = filter(arr, mas1);
// //   }
  
// //   // new Card().draw(resDeco);
  
// //   let resInsert: Array<Filter>;
// //   const insert = document.querySelector('.settings-insert') as HTMLDivElement;
// //   const inpy2 = insert.getElementsByTagName('input');
// //   const mas2: string[] = [];
// //   for (let i = 0; i < inpy2.length; i++) {
// //     if (inpy2[i].checked) {
// //       mas2.push(inpy2[i].name);
// //     } 
// //   }
  
// //   if (resDeco.length > 0) {
// //     resInsert = filter(resDeco, mas2);
// //   } else {
// //     resInsert = filter(arr, mas2);
// //   }
  
// //   // new Card().draw(resInsert);
  
// //   let resMetall: Array<Filter>;
// //   const metall = document.querySelector('.settings-metall') as HTMLDivElement;
// //   const inpy3 = metall.getElementsByTagName('input');
// //   const mas3: string[] = [];
// //   for (let i = 0; i < inpy3.length; i++) {
// //     if (inpy3[i].checked) {
// //       mas3.push(inpy3[i].name);
// //     } 
// //   }
  
// //   if (resInsert.length > 0) {
// //     resMetall = filter(resInsert, mas3);
// //   } else {
// //     resMetall = filter(arr, mas3);
// //   }
  
// //   const leftSide = document.querySelector('.right-side') as HTMLDivElement;
  
// //   leftSide.innerHTML = '';
  
// //   new Card().draw(resMetall);
  
  
// //   // leftSide.prepend(newCard);
  
// //   // const rightsi = document.querySelector('.right-side');
  
// //   // rightsi?.addEventListener('click', toogle);
  
  
// //   const card = document.querySelectorAll('.cart-product');
  
  
// //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   card.forEach((el) => {
// //     el.addEventListener('click', () => {
// //       if (el.classList.contains('active-card')) {
// //         el.classList.remove('active-card');
// //         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //         const warn = document.querySelector('.warning') as HTMLElement;
// //         let currentCart = Number(cardBig.textContent);
// //         currentCart--;
// //         warn.textContent = '';
// //         cardBig.innerHTML = String((currentCart));
// //       } else {
  
// //         const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //         const warn = document.querySelector('.warning') as HTMLElement;
// //         let currentCart = Number(cardBig.textContent);
  
// //         if (currentCart >= 20) {
// //           warn.textContent = 'Извините, все слоты заполнены';
    
// //         } else {
// //           currentCart++;
// //           cardBig.innerHTML = String((currentCart));
// //           warn.textContent = '';
// //           el.classList.add('active-card');
// //         }
// //       }
// //     });
// //   });
  
// //   });
// //   });

// //   // function filter(arrIs: Array<Filter>, arrSv: string[]) {
// //   //   // const newArrResult: Filter[] = [];
  
// //   //   // // eslint-disable-next-line @typescript-eslint/no-shadow
// //   //   // arrIs.forEach((e) => {
// //   //   //   const arrRes = Object.values(e);
      
// //   //   //   for (let i = 0; i < arrSv.length; i++) {
// //   //   //     if (arrRes.indexOf(arrSv[i]) !== -1) {
// //   //   //       newArrResult.push(e);
// //   //   //     }
// //   //   //   }
// //   //   // });
  
// //   //   // return newArrResult.length > 0 ? newArrResult : arrIs;
  
// //   //   const newArrResult: Filter[] = [];
    
  
// //   //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   //   arrIs.forEach((e) => {
// //   //     const arrRes = Object.values(e);
// //   // // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
// //   //     let arrIndex: any[] = [];
      
// //   //     for (let i = 0; i < arrSv.length; i++) {
        
// //   //       if (arrRes.indexOf(arrSv[i]) !== -1) {
// //   //         arrIndex.push(arrRes.indexOf(arrSv[i]));
// //   //         // newArrResult.push(e);
// //   //       }
// //   //     }
// //   //     if (arrIndex.length === arrSv.length) {
// //   //       newArrResult.push(e);
// //   //     }
      
// //   //   });
  
// //   // // console.log(newArrResult);
// //   //   return newArrResult.length > 0 ? newArrResult : arrIs;
// //   // }
  
// //   // filter(product, mas);
  
// //   let res: Array<Filter>;
// //   const popular = document.querySelector('.settings-offer') as HTMLDivElement;
// //   const inpy = popular.getElementsByTagName('input');
// //   const mas: string[] = [];
// //   for (let i = 0; i < inpy.length; i++) {
// //     if (inpy[i].checked) {
// //       mas.push(inpy[i].name);
// //     } 
// //   }
  
// //   // eslint-disable-next-line prefer-const
// //   res = filter(arr, mas);
  
// //   let resDeco: Array<Filter>;
// //   const decoration = document.querySelector('.settings-decoration') as HTMLDivElement;
// //   const inpy1 = decoration.getElementsByTagName('input');
// //   const mas1: string[] = [];
// //   for (let i = 0; i < inpy1.length; i++) {
// //     if (inpy1[i].checked) {
// //       mas1.push(inpy1[i].name);
// //     } 
// //   }
  
// //   if (res.length > 0) {
// //     resDeco = filter(res, mas1);
// //   } else {
// //     resDeco = filter(arr, mas1);
// //   }
  
// //   // new Card().draw(resDeco);
  
// //   let resInsert: Array<Filter>;
// //   const insert = document.querySelector('.settings-insert') as HTMLDivElement;
// //   const inpy2 = insert.getElementsByTagName('input');
// //   const mas2: string[] = [];
// //   for (let i = 0; i < inpy2.length; i++) {
// //     if (inpy2[i].checked) {
// //       mas2.push(inpy2[i].name);
// //     } 
// //   }
  
// //   if (resDeco.length > 0) {
// //     resInsert = filter(resDeco, mas2);
// //   } else {
// //     resInsert = filter(arr, mas2);
// //   }
  
// //   // new Card().draw(resInsert);
  
// //   let resMetall: Array<Filter>;
// //   const metall = document.querySelector('.settings-metall') as HTMLDivElement;
// //   const inpy3 = metall.getElementsByTagName('input');
// //   const mas3: string[] = [];
// //   for (let i = 0; i < inpy3.length; i++) {
// //     if (inpy3[i].checked) {
// //       mas3.push(inpy3[i].name);
// //     } 
// //   }
  
// //   if (resInsert.length > 0) {
// //     resMetall = filter(resInsert, mas3);
// //   } else {
// //     resMetall = filter(arr, mas3);
// //   }
  
// //   const leftSide = document.querySelector('.right-side') as HTMLDivElement;
  
// //   leftSide.innerHTML = '';
  
// //   new Card().draw(resMetall);


// // }
  

// // // function filter(arrIs: Array<Filter>, arrSv: string[]) {
// // //   const newArrResult: Filter[] = [];

// // //   // eslint-disable-next-line @typescript-eslint/no-shadow
// // //   arrIs.forEach((e) => {
// // //     const arrRes = Object.values(e);
    
// // //     for (let i = 0; i < arrSv.length; i++) {
// // //       if (arrRes.indexOf(arrSv[i]) !== -1) {
// // //         newArrResult.push(e);
// // //       }
// // //     }
// // //   });

// // //   return newArrResult.length > 0 ? newArrResult : arrIs;
// // // }



// function sort(arr: Array<Filter>) {
//   function compareArrays(sourceArray: Array<Filter>, filter: string[]) {

//     const sortedArray: Filter[] = [];
  
//     sourceArray.forEach((e) => {
//       const arrObject = Object.values(e);
//       // const indexArr: number[] = [];
  
//       for (let i = 0; i < filter.length; i++) {
//         if (arrObject.indexOf(filter[i]) !== -1) {
//           sortedArray.push(e);
//           // indexArr.push(arrObject.indexOf(filter[i]));
//         }
//       }
//       // console.log(indexArr);
  
//       // if (indexArr.length === filter.length) {
//       //   sortedArray.push(e);
//       // }
//     });
  
//     return sortedArray.length > 0 ? sortedArray : [];
//   }

//   function setting(parent: string) { 
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


//   const currentCheckbox = document.querySelectorAll('input');
  
//   currentCheckbox.forEach((el) => {
//     // offer
//     const settingOffer = setting('.settings-offer');
//     let arrOffer = compareArrays(arr, settingOffer);
    
//     if (arrOffer.length > 0) {
//       arrOffer = compareArrays(arrOffer, settingOffer);
//     } 

//     // Decor
//     const settingDecor = setting('.settings-decoration');
//     // let arrDeco = compareArrays(arr, settingOffer);
//     let arrDeco: Array<Filter>;
    
//     if (arrOffer.length > 0) {
//       arrDeco = compareArrays(arrOffer, settingDecor);
//     } else {
//       arrDeco = compareArrays(arr, settingDecor);
//     }

//     // Insert 
//     const settingInsert = setting('.settings-insert');
//     // let arrInsert = compareArrays(arr, settingOffer);
//     let arrInsert: Array<Filter>;
    
//     if (arrDeco.length > 0) {
//       arrInsert = compareArrays(arrDeco, settingInsert);
//     } else {
//       arrInsert = compareArrays(arr, settingInsert);
//     }

//     // // Metall
//     const settingMetall = setting('.settings-metall');
//     // let arrMetall = compareArrays(arr, settingOffer);
//     let arrMetall: Array<Filter>;
    
//     if (arrDeco.length > 0) {
//       arrMetall = compareArrays(arrInsert, settingMetall);
//     } else {
//       arrMetall = compareArrays(arr, settingMetall);
//     }
//     // if (arrMetall.length === 0) {
//     //   new Card().drawText();
//     // }

//     // console.log(arrMetall);
//     // new Card().draw(arrMetall);


// // let resMetall: Array<Filter>;
// // const metall = document.querySelector('.settings-metall') as HTMLDivElement;
// // const inpy3 = metall.getElementsByTagName('input');
// // const mas3: string[] = [];
// // for (let i = 0; i < inpy3.length; i++) {
// //   if (inpy3[i].checked) {
// //     mas3.push(inpy3[i].name);
// //   } 
// // }

// // if (resInsert.length > 0) {
// //   resMetall = filter(resInsert, mas3);
// // } else {
// //   resMetall = filter(arr, mas3);
// // }

// // const leftSide = document.querySelector('.right-side') as HTMLDivElement;

// // leftSide.innerHTML = '';

// // new Card().draw(resMetall);


// // // leftSide.prepend(newCard);

// // // const rightsi = document.querySelector('.right-side');

// // // rightsi?.addEventListener('click', toogle);


// // const card = document.querySelectorAll('.cart-product');


// // // eslint-disable-next-line @typescript-eslint/no-shadow
// // card.forEach((el) => {
// //   el.addEventListener('click', () => {
// //     if (el.classList.contains('active-card')) {
// //       el.classList.remove('active-card');
// //       const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //       const warn = document.querySelector('.warning') as HTMLElement;
// //       let currentCart = Number(cardBig.textContent);
// //       currentCart--;
// //       warn.textContent = '';
// //       cardBig.innerHTML = String((currentCart));
// //     } else {

// //       const cardBig = document.querySelector('.items-the-cart') as HTMLSpanElement;
// //       const warn = document.querySelector('.warning') as HTMLElement;
// //       let currentCart = Number(cardBig.textContent);

// //       if (currentCart >= 20) {
// //         warn.textContent = 'Извините, все слоты заполнены';
  
// //       } else {
// //         currentCart++;
// //         cardBig.innerHTML = String((currentCart));
// //         warn.textContent = '';
// //         el.classList.add('active-card');
// //       }
// //     }
// //   });
// // });

// // });
// // });

// // // function filter(arrIs: Array<Filter>, arrSv: string[]) {
// // //   // const newArrResult: Filter[] = [];

// // //   // // eslint-disable-next-line @typescript-eslint/no-shadow
// // //   // arrIs.forEach((e) => {
// // //   //   const arrRes = Object.values(e);
    
// // //   //   for (let i = 0; i < arrSv.length; i++) {
// // //   //     if (arrRes.indexOf(arrSv[i]) !== -1) {
// // //   //       newArrResult.push(e);
// // //   //     }
// // //   //   }
// // //   // });

// // //   // return newArrResult.length > 0 ? newArrResult : arrIs;

// // //   const newArrResult: Filter[] = [];
  

// // //   // eslint-disable-next-line @typescript-eslint/no-shadow
// // //   arrIs.forEach((e) => {
// // //     const arrRes = Object.values(e);
// // // // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
// // //     let arrIndex: any[] = [];
    
// // //     for (let i = 0; i < arrSv.length; i++) {
      
// // //       if (arrRes.indexOf(arrSv[i]) !== -1) {
// // //         arrIndex.push(arrRes.indexOf(arrSv[i]));
// // //         // newArrResult.push(e);
// // //       }
// // //     }
// // //     if (arrIndex.length === arrSv.length) {
// // //       newArrResult.push(e);
// // //     }
    
// // //   });

// // // // console.log(newArrResult);
// // //   return newArrResult.length > 0 ? newArrResult : arrIs;
// // // }

// // // filter(product, mas);

// // let res: Array<Filter>;
// // const popular = document.querySelector('.settings-offer') as HTMLDivElement;
// // const inpy = popular.getElementsByTagName('input');
// // const mas: string[] = [];
// // for (let i = 0; i < inpy.length; i++) {
// //   if (inpy[i].checked) {
// //     mas.push(inpy[i].name);
// //   } 
// // }

// // // eslint-disable-next-line prefer-const
// // res = filter(arr, mas);

// // let resDeco: Array<Filter>;
// // const decoration = document.querySelector('.settings-decoration') as HTMLDivElement;
// // const inpy1 = decoration.getElementsByTagName('input');
// // const mas1: string[] = [];
// // for (let i = 0; i < inpy1.length; i++) {
// //   if (inpy1[i].checked) {
// //     mas1.push(inpy1[i].name);
// //   } 
// // }

// // if (res.length > 0) {
// //   resDeco = filter(res, mas1);
// // } else {
// //   resDeco = filter(arr, mas1);
// // }

// // // new Card().draw(resDeco);

// // let resInsert: Array<Filter>;
// // const insert = document.querySelector('.settings-insert') as HTMLDivElement;
// // const inpy2 = insert.getElementsByTagName('input');
// // const mas2: string[] = [];
// // for (let i = 0; i < inpy2.length; i++) {
// //   if (inpy2[i].checked) {
// //     mas2.push(inpy2[i].name);
// //   } 
// // }

// // if (resDeco.length > 0) {
// //   resInsert = filter(resDeco, mas2);
// // } else {
// //   resInsert = filter(arr, mas2);
// // }

// // // new Card().draw(resInsert);

// // let resMetall: Array<Filter>;
// // const metall = document.querySelector('.settings-metall') as HTMLDivElement;
// // const inpy3 = metall.getElementsByTagName('input');
// // const mas3: string[] = [];
// // for (let i = 0; i < inpy3.length; i++) {
// //   if (inpy3[i].checked) {
// //     mas3.push(inpy3[i].name);
// //   } 
// // }

// // if (resInsert.length > 0) {
// //   resMetall = filter(resInsert, mas3);
// // } else {
// //   resMetall = filter(arr, mas3);
// // }

// // const leftSide = document.querySelector('.right-side') as HTMLDivElement;

// // leftSide.innerHTML = '';

// // new Card().draw(resMetall);


//   });
// }


// const currentCheckbox = document.querySelectorAll('input');
//   currentCheckbox.forEach((el) => {
//     el.addEventListener('change', () => {
//   });
// });
  

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

// sort(product);