import createDomNode from './createDomNode';

export default function createInput(className: string[], attr: Array<{ [key: string]: string }>, parentNode?: HTMLElement) {
  const elem =  createDomNode('input', className, parentNode) as HTMLInputElement;
    
  attr.forEach((el) => {
    for (const key in el) {
      elem.setAttribute(key, el[key]);
    }
  });
  
  return elem;
}