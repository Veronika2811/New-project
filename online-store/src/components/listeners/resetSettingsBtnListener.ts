export default function resetSettingsBtnListener() {
  const btnClearStorage = document.querySelector('.btn_reset') as HTMLButtonElement;

  btnClearStorage.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });
}