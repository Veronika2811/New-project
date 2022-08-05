import createDomNode from '../../helpers/createDomNode';

export const contWin = createDomNode('div', ['container-win']);

export default class Win {
  contWin = contWin;

  constructor(cont: HTMLElement) {
    cont.append(contWin);
  }
}