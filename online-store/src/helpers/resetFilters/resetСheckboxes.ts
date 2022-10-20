export default function resetCheckboxes() {
  const filterChek = document.querySelector('.filter') as HTMLDivElement;
  const currentCheckbox = filterChek.querySelectorAll('input');
  
  currentCheckbox.forEach((el) => {
    if (el.checked) {
      el.checked = localStorage.getItem(el.id) === 'false';
      localStorage.setItem(el.id, JSON.stringify(el.checked));
    }
  });
}