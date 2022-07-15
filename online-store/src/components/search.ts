function insertMark(string: string, pos: number, len: number) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

export function searchCard(value: string) {
  const sortNone = document.querySelector('.warning') as HTMLHeadElement;
  const elasticItems = document.querySelectorAll('.card');
  const searchRegExp = new RegExp(value, 'gi') as RegExp;

  if (value === '') {
    elasticItems.forEach((el) => {
      el.classList.remove('hide');
    });
    return;
  }

  elasticItems.forEach((el) => {
    const innerCard = el.querySelector('.name');
    if (innerCard) {
      const elementText = innerCard.textContent as string;
      const isContainsSearchRequest = searchRegExp.test(elementText);
      if (!isContainsSearchRequest) {
        el.classList.add('hide');
      } else {
        el.classList.remove('hide');
      }
    }
  });
}









// // const inputSearch = document.querySelector('.search') as HTMLInputElement;
// // eslint-disable-next-line @typescript-eslint/no-redeclare
// value = value.toLowerCase();
// const sortNone = document.querySelector('.warning') as HTMLHeadElement;
// const nameCard = document.querySelectorAll('.name');
// const card = document.querySelectorAll('.card');

// if (value !== '') {
//   nameCard.forEach((el) => {
//     const name = (el as HTMLElement).innerText.toLowerCase();
//     const parentCard = el.parentElement;
//     if (name.search(value) == -1) {
//       parentCard?.classList.add('hide');
//       // el.innerHTML = (el as HTMLElement).innerText;
//     } else {
//       el.classList.remove('hide');
//       const str = (el as HTMLElement).innerText;
//       el.innerHTML = insertMark(str, name.search(value), value.length);
//     }
//   });

//   let count = 0;
//   for (let i = 0; i < card.length - 1; i++) {
//     count++;
//   }

//   const currentCard = [];
    
//   card.forEach((el) => {
//     if (el.classList.contains('hide')) {
//       currentCard.push(el);
//     }
//   });
//   if (currentCard.length === count ) {
//     sortNone.style.display = 'block';
//   }
// } else {
//   sortNone.style.display = 'none';
//   nameCard.forEach((el) => {
//     const parentCard = el.parentElement;
//     parentCard?.classList.remove('hide');
//     // el.innerHTML = (el as HTMLElement).innerText;
//   });
// }
// }