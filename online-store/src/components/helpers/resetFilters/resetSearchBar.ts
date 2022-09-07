export default function resetSearchBar() {
  const inputSearch = document.querySelector('.search') as HTMLInputElement;
  const value = inputSearch.value = '';
  localStorage.setItem('search', JSON.stringify(value));
  (document.querySelector('.warning') as HTMLHeadElement).style.display = 'none';
  (document.querySelectorAll('.card')).forEach((el) => {
    el.classList.remove('hide');
  });
}