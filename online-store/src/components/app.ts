import { Filter } from './interfaces/interface';

export const productArr: Filter[] = [];

export async function getData() {
  const res = await fetch('../assets/data.json');
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    productArr.push(data[i]);
  }
}