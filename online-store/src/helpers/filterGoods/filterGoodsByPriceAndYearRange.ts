import ProductInformation from '../../components/interfaces/interface';

export default function filterGoodsByPriceAndYearRange(goods: Array<ProductInformation>, arrPrice: string[], arrYear: string[]) {
  const sortedArrayByRange: Array<ProductInformation> = [];
  
  goods.forEach((el) => {
    const price = el.price;
    const year = el.year;

    if (
      Number(arrPrice[0]) <= price &&
      Number(arrPrice[1]) >= price &&
      Number(arrYear[0]) <= year &&
      Number(arrYear[1]) >= year
    ) {
      sortedArrayByRange.push(el);
    }
  });
  return sortedArrayByRange;
}