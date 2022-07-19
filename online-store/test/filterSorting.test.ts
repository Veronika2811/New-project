import FilterSort from '../src/components/filterSorting';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';

const product = [
  { 
    'name': 'Rock-n-roll',
    'price': 20,
    'year': 2010,
    'offer': 'Популярное',
    'decoration': 'Браслет',
    'insert': 'Без вставки',
    'metall': 'Золото',
    'image': './assets/catalog/bracelets/1.JPG',
  },
  { 
    'name': 'Нежность',
    'price': 70,
    'year': 2011,
    'offer': 'Популярное',
    'decoration': 'Браслет',
    'insert': 'Фианит',
    'metall': 'Серебро',
    'image': './assets/catalog/bracelets/2.JPG',
  },
];

const endResult  = [
  { 
    'name': 'Нежность',
    'price': 70,
    'year': 2011,
    'offer': 'Популярное',
    'decoration': 'Браслет',
    'insert': 'Фианит',
    'metall': 'Серебро',
    'image': './assets/catalog/bracelets/2.JPG',
  },
];

test('Sort an array', () => {
  expect(new FilterSort().compareArrays(product, ['Фианит'])).toEqual(endResult);
});

const end  = 
  { 
    'name': 'Нежность',
    'price': 70,
    'year': 2011,
    'offer': 'Популярное',
    'decoration': 'Браслет',
    'insert': 'Фианит',
    'metall': 'Серебро',
    'image': './assets/catalog/bracelets/2.JPG',
  };

test('this product has the desired properties', () => {
  expect(end).toHaveProperty('insert');
});


test('returns sorted array', () => {
  expect(new FilterSort().compareArrays(product, ['Фианит'])).toBeDefined();
});


