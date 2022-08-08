import { Attributes } from '../interface/interface';

export function createDomNode(
  tag: string,
  className?: string[],
  parentNode?: HTMLElement,
  text?: string,
): HTMLElement {
  const elem = document.createElement(tag);
  if (className) {
    className.forEach((el) => elem.classList.add(el));
  }
  if (parentNode) {
    parentNode.append(elem);
  }
  if (text) {
    elem.textContent = text;
  }
  return elem;
}

export function createDomInput(
  className: string[],
  attr: Array<Attributes>,
  parentNode?: HTMLElement,
): HTMLInputElement {
  const elem = createDomNode('input', className, parentNode) as HTMLInputElement;
  attr.forEach((el) => {
    for (const key in el) {
      elem.setAttribute(key, el[key]);
    }
  });
  return elem;
}

export function createDomButton(
  className: string[],
  text: string,
  parentNode?: HTMLElement,
  attr?: Array<Attributes>,
): HTMLButtonElement {
  const elem = createDomNode('button', className, parentNode, text) as HTMLButtonElement;
  if (attr) {
    attr.forEach((el) => {
      for (const key in el) {
        elem.setAttribute(key, el[key]);
      }
    });
  }
  return elem;
}
