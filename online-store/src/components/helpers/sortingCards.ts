function stringSorting(element: string, sortOrder?: string) {
  const parentCards = document.querySelector('.right-side') as HTMLElement;

  let sortСondition;
  
  for (let i = 0; i < parentCards.children.length; i++) {
    for (let j = i; j < parentCards.children.length; j++) {
      if (sortOrder === 'max') {
        sortСondition = parentCards.children[i].getAttribute(element) as string > (parentCards.children[j].getAttribute(element) as string);
      } else {
        sortСondition = parentCards.children[i].getAttribute(element) as string < (parentCards.children[j].getAttribute(element) as string);
      }
      if (sortСondition) {
        const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
        parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
      }
    }
  }
}

function digitSorting(element: string, sortOrder?: string) {
  const parentCards = document.querySelector('.right-side') as HTMLElement;

  let sortСondition;
  
  for (let i = 0; i < parentCards.children.length; i++) {
    for (let j = i; j < parentCards.children.length; j++) {
      if (sortOrder === 'max') {
        sortСondition = Number(parentCards.children[i].getAttribute(element)) > Number(parentCards.children[j].getAttribute(element));
      } else {
        sortСondition = Number(parentCards.children[i].getAttribute(element)) < Number(parentCards.children[j].getAttribute(element));
      }
      if (sortСondition) {
        const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
        parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
      }
    }
  }
}

export default function sortingSelect(value: string) {
  if ( value === 'fromAToZ' ) {
    stringSorting('data-name', 'max');
  }
  if ( value === 'fromZToA' ) {
    stringSorting('data-name');
  }
  if ( value === 'fromMinToMaxPrice' ) {
    digitSorting('data-sort', 'max');
  }
  if ( value === 'fromMaxToMinPrice' ) {
    digitSorting('data-sort');
  }
  localStorage.setItem('option', value);
}