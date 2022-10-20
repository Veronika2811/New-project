import { searchCard } from '../search';

export default function searchStringListener() {
  const inputSearch = document.querySelector('.search') as HTMLInputElement;

  let value = '';
  if (localStorage.getItem('search') !== null) {
    value = JSON.parse(localStorage.getItem('search') as string);
  }

  inputSearch?.addEventListener('input', (event) => {
    inputSearch.addEventListener('search', () => {
      (document.querySelector('.warning') as HTMLHeadElement).style.display = 'none';
      document.querySelectorAll('.card').forEach((el) => {
        el.classList.remove('hide');
      });
    });

    value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    localStorage.setItem('search', JSON.stringify(value));
      
    searchCard(value);
  });

  inputSearch.value = value;
  searchCard(value);
}