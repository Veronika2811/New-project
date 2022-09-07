import sortingSelect from '../helpers/sortingCards';

export default function goodsSortingListener() {
  const select = document.querySelector('select') as HTMLSelectElement;

  let value = 'fromAToZ';
  if (localStorage.getItem('option') !== null) {
    value = localStorage.getItem('option') as string;
  } 

  select.onchange = () => {
    sortingSelect(select.value);
  };

  document.querySelector('.sort-params > option[selected]')?.removeAttribute('selected');
  document.querySelector(`.sort-params > option[value=${value}]`)?.setAttribute('selected', 'selected');
  sortingSelect(value);
}