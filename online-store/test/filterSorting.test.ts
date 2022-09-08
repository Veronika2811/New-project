import filterGoodsByPriceAndYearRange from '../src/components/filterGoods/filterGoodsByPriceAndYearRange';
import FilterSort from '../src/components/filterSorting';

const RockNRollMock = { 
  name: 'Nail',
  price: 53,
  year: 2022,
  offer: 'Новинка',
  decoration: 'Браслет',
  insert: 'Бриллиант',
  metall: 'Серебро',
  image: './assets/catalog/bracelets/8.JPG',
};

const GridMock = { 
  name: 'Grid',
  price: 99,
  year: 2022,
  offer: 'Новинка',
  decoration: 'Браслет',
  insert: 'Без вставки',
  metall: 'Серебро',
  image: './assets/catalog/bracelets/9.JPG',
};

const ArtMock = { 
  name: 'Art',
  price: 102,
  year: 2014,
  offer: false,
  decoration: 'Цепочка',
  insert: 'Без вставки',
  metall: 'Серебро',
  image: './assets/catalog/chains/2.JPG',
};

const PowerMock = { 
  name: 'Power',
  price: 34,
  year: 2022,
  offer: 'Новинка',
  decoration: 'Серьги',
  insert: 'Без вставки',
  metall: 'Серебро',
  image: './assets/catalog/earrings/7.JPG',
};

const goodsMock = [RockNRollMock, GridMock, ArtMock, PowerMock];
 
it('should sort array of goods by property', () => {
  const expectedArrayGoods = [RockNRollMock, GridMock, ArtMock];
  const goodsFilters = ['Браслет', 'Цепочка'];

  expect(new FilterSort(goodsMock).compareArrays(goodsMock, goodsFilters)).toEqual(expectedArrayGoods);
});

it('should sort the array of goods by price range and year of release', () => {
  const expectedArrayGoods = [RockNRollMock, PowerMock];
  const filterPrice = ['34', '53'];
  const filterYear = ['2020', '2022'];

  expect(filterGoodsByPriceAndYearRange(goodsMock, filterPrice, filterYear)).toEqual(expectedArrayGoods);
});
