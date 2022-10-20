import { goodsMock, nailMock, gridMock, artMock, tendernessMock, rockNRollMock, powerMock } from './mock';
import { BRACELET, CHAIN, DIAMOND, EARRINGS, FAKE, FIANIT, GOLD, NEW, POPULAR, SILVER, WITHOUT_INSERT } from './constants';

import FilterSort from '../src/components/FilterSort';

describe('FilterSort testing compareArrays', () => {
  it('should sort array of goods by property', () => {
    const expectedArrayGoods = [nailMock, gridMock, artMock, tendernessMock, rockNRollMock];
    const goodsFilters = ['Браслет', 'Цепочка'];
  
    expect(new FilterSort(goodsMock).compareArrays(goodsMock, goodsFilters)).toEqual(expectedArrayGoods);
  });
  
  it.each([
    [[FIANIT], [tendernessMock]],
    [[SILVER], [nailMock, gridMock, artMock, powerMock, tendernessMock]],
    [[FAKE], [artMock, tendernessMock]],
    [[CHAIN], [artMock, tendernessMock]],
    [[GOLD], [rockNRollMock]],
    [[POPULAR], [rockNRollMock]],
    [[NEW], [nailMock, gridMock, powerMock]],
    [[BRACELET], [nailMock, gridMock, rockNRollMock]],
    [[EARRINGS], [powerMock]],
    [[WITHOUT_INSERT], [gridMock, artMock, powerMock, rockNRollMock]],
    [[DIAMOND], [nailMock]],
    [[''], []],
    [[false], []],
  ])('should return a sorted array', (filterParam, expectedArray) => {
    expect(
      new FilterSort(goodsMock).compareArrays(goodsMock, filterParam),
    ).toEqual(expectedArray);
  });
});
