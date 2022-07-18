/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function sortingSelect(value: string) {
  const parentCards = <HTMLElement>document.querySelector('.right-side');

  if ( value === 'value1' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (parentCards.children[i].getAttribute('data-name')! > parentCards.children[j].getAttribute('data-name')!) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', value);
  }
  if ( value === 'value2' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (parentCards.children[i].getAttribute('data-name')! < parentCards.children[j].getAttribute('data-name')!) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', value);
  }
  if ( value === 'value3' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (Number(parentCards.children[i].getAttribute('data-sort')) > Number(parentCards.children[j].getAttribute('data-sort'))) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', value);
  }
  if ( value === 'value4' ) {
    for (let i = 0; i < parentCards.children.length; i++) {
      for (let j = i; j < parentCards.children.length; j++) {
        if (Number(parentCards.children[i].getAttribute('data-sort')) < Number(parentCards.children[j].getAttribute('data-sort'))) {
          const replacedNode = parentCards.replaceChild(parentCards.children[j], parentCards.children[i]);
          parentCards.children[i].parentNode?.insertBefore(replacedNode, parentCards.children[i].nextSibling);
        }
      }
    }
    localStorage.setItem('option', value);
  }
}