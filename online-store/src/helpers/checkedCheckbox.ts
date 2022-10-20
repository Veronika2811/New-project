export default function checkedCheck(currentCheckbox: NodeListOf<HTMLInputElement>) {
  let activeCheckboxObj: { [key: string]: Array<string> } = {
    offer: [],
    decor: [],
    insert: [],
    metall: [],
  };

  currentCheckbox.forEach((el) => {
    if (el.checked) {
      if (el.value === 'offer') {
        activeCheckboxObj.offer.push(el.name);
      }
      if (el.value === 'decoration') {
        activeCheckboxObj.decor.push(el.name);
      }
      if (el.value === 'typeInsert') {
        activeCheckboxObj.insert.push(el.name);
      }
      if (el.value === 'typeMetall') {
        activeCheckboxObj.metall.push(el.name);
      }
    }
  });

  localStorage.setItem('setting', JSON.stringify(activeCheckboxObj));

  if (localStorage.getItem('setting') !== null) {
    activeCheckboxObj = JSON.parse(localStorage.getItem('setting') as string);
  }

  return activeCheckboxObj;
}