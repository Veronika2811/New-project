import createDomNode from './createDomNode';

export default function createButton(className: string[], text: string, parentNode?: HTMLElement, attr?: string) {
  const elem =  createDomNode('button', className, parentNode, text) as HTMLButtonElement;
  if (attr) {
    elem.setAttribute(attr, 'disabled');
  }
  return elem;
}