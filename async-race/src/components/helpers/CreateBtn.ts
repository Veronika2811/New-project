import createDomNode from './createDomNode';

export default function createButton(className: string[], text: string, parentNode?: HTMLElement, attr?: Array<{ [key: string]: string }>) {
  const elem =  createDomNode('button', className, parentNode, text) as HTMLButtonElement;
  if (attr) {
    attr.forEach((el) => {
      for (const key in el) {
        elem.setAttribute(key, el[key]);
      }
    });
  }
  return elem;
}