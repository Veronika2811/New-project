import filterGoodsByPriceAndYearRange from '../src/helpers/filterGoods/filterGoodsByPriceAndYearRange';
import { goodsMock, nailMock, powerMock } from './mock';
 
describe('filterGoodsByPriceAndYearRange', () => {
  it('should sort the array of goods by price range and year of release', () => {
    const expectedArrayGoods = [nailMock, powerMock];
    const filterPrice = ['34', '53'];
    const filterYear = ['2020', '2022'];
  
    expect(filterGoodsByPriceAndYearRange(goodsMock, filterPrice, filterYear)).toEqual(expectedArrayGoods);
  });
});
