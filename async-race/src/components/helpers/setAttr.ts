export default function setDisableAttribute( elem: HTMLInputElement | HTMLButtonElement, value: boolean): void {
  if (value === true) {
    elem.setAttribute('disabled', 'disabled');
  } else {
    elem.removeAttribute('disabled');
  }
}