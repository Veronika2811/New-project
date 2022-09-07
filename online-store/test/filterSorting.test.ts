// import FilterSort from '../src/components/filterSorting';
// import { goods } from '../src/components/goods';

// const productArray = [
//   { 
//     'name': 'Rock-n-roll',
//     'price': 20,
//     'year': 2010,
//     'offer': 'Популярное',
//     'decoration': 'Браслет',
//     'insert': 'Без вставки',
//     'metall': 'Золото',
//     'image': './assets/catalog/bracelets/1.JPG',
//   },
//   { 
//     'name': 'Нежность',
//     'price': 70,
//     'year': 2011,
//     'offer': 'Популярное',
//     'decoration': 'Браслет',
//     'insert': 'Фианит',
//     'metall': 'Серебро',
//     'image': './assets/catalog/bracelets/2.JPG',
//   },
// ];

// test('Sort an array', () => {
//   const resultArray  = [
//     { 
//       'name': 'Нежность',
//       'price': 70,
//       'year': 2011,
//       'offer': 'Популярное',
//       'decoration': 'Браслет',
//       'insert': 'Фианит',
//       'metall': 'Серебро',
//       'image': './assets/catalog/bracelets/2.JPG',
//     },
//   ];

//   expect(new FilterSort(goods).compareArrays(productArray, ['Фианит'])).toEqual(resultArray);
// });

// test('this product has the desired properties', () => {
//   const objectProduct  = 
//   { 
//     'name': 'Нежность',
//     'price': 70,
//     'year': 2011,
//     'offer': 'Популярное',
//     'decoration': 'Браслет',
//     'insert': 'Фианит',
//     'metall': 'Серебро',
//     'image': './assets/catalog/bracelets/2.JPG',
//   };

//   expect(objectProduct).toHaveProperty('name');
//   expect(objectProduct).toHaveProperty('price');
//   expect(objectProduct).toHaveProperty('year');
//   expect(objectProduct).toHaveProperty('offer');
//   expect(objectProduct).toHaveProperty('decoration');
//   expect(objectProduct).toHaveProperty('insert');
//   expect(objectProduct).toHaveProperty('metall');
//   expect(objectProduct).toHaveProperty('image');
// });


// test('returns sorted array', () => {
//   expect(new FilterSort(goods).compareArrays(productArray, ['Фианит'])).toBeDefined();
// });