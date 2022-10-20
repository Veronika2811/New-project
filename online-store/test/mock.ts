import { BRACELET, CHAIN, DIAMOND, EARRINGS, FAKE, FIANIT, GOLD, NEW, POPULAR, SILVER, WITHOUT_INSERT } from './constants';

export const nailMock = { 
  name: 'Nail',
  price: 53,
  year: 2022,
  offer: NEW,
  decoration: BRACELET,
  insert: DIAMOND,
  metall: SILVER,
  image: './assets/catalog/bracelets/8.JPG',
};

export const gridMock = { 
  name: 'Grid',
  price: 99,
  year: 2022,
  offer: NEW,
  decoration: BRACELET,
  insert: WITHOUT_INSERT,
  metall: SILVER,
  image: './assets/catalog/bracelets/9.JPG',
};

export const artMock = { 
  name: 'Art',
  price: 102,
  year: 2014,
  offer: FAKE,
  decoration: CHAIN,
  insert: WITHOUT_INSERT,
  metall: SILVER,
  image: './assets/catalog/chains/2.JPG',
};

export const powerMock = { 
  name: 'Power',
  price: 34,
  year: 2022,
  offer: NEW,
  decoration: EARRINGS,
  insert: WITHOUT_INSERT,
  metall: SILVER,
  image: './assets/catalog/earrings/7.JPG',
};

export const tendernessMock = { 
  name: 'Нежность',
  price: 70,
  year: 2011,
  offer: FAKE,
  decoration: CHAIN,
  insert: FIANIT,
  metall: SILVER,
  image: './assets/catalog/bracelets/2.JPG',
};

export const rockNRollMock = { 
  name: 'Rock-n-roll',
  price: 20,
  year: 2010,
  offer: POPULAR,
  decoration: BRACELET,
  insert: WITHOUT_INSERT,
  metall: GOLD,
  image: './assets/catalog/bracelets/1.JPG',
};

export const goodsMock = [nailMock, gridMock, artMock, powerMock, tendernessMock, rockNRollMock];