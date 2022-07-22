import createDomNode from '../helpers/createDomNode';

export default class Header {
  private header;

  private wrapper;

  private logoBlock;

  private logoText;

  private warningSearchText;

  private navigation;

  private navigationList;

  private navigationListItemFirst;

  private searchInput;

  private navigationListItemLast;

  private imgCart;

  private currentActiveCart;

  private line;

  constructor() {
    this.header = createDomNode('header', 'header') as HTMLElement;
    this.wrapper = createDomNode('div', 'header-wrapper') as HTMLDivElement;

    this.logoBlock = createDomNode('div', 'logo') as HTMLDivElement;
    this.logoText = createDomNode('h1', 'logo-text', 'Online-Store') as HTMLHeadElement;

    this.warningSearchText = createDomNode('h3', 'warning', 'Извините, совпадений не обнаружено') as HTMLHeadElement;

    this.navigation = createDomNode('nav', 'menu') as HTMLElement;
    this.navigationList = createDomNode('ul', 'menu__list') as HTMLUListElement;

    this.navigationListItemFirst = createDomNode('li') as HTMLLIElement;
    this.searchInput = createDomNode('input', 'search') as HTMLInputElement;
    this.searchInput.setAttribute('type', 'search');
    this.searchInput.setAttribute('autocomplete', 'off');
    this.searchInput.setAttribute('autofocus', 'autofocus');

    this.navigationListItemLast = createDomNode('li', 'cart-item');
    this.imgCart = createDomNode('img', 'cart') as HTMLImageElement;
    this.imgCart.alt = 'cart';
    this.imgCart.src = './assets/svg/cart.svg';
    this.currentActiveCart = createDomNode('span', 'items-the-cart', '0');

    this.line = createDomNode('hr', 'line');

    this.logoBlock.append(this.logoText);

    this.navigationListItemFirst.append(this.searchInput);
    this.navigationListItemLast.append(this.imgCart, this.currentActiveCart);
    
    this.navigationList.append(this.navigationListItemFirst, this.navigationListItemLast);

    this.navigation.append(this.navigationList);

    this.wrapper.append(this.logoBlock, this.warningSearchText, this.navigation);

    this.header.append(this.wrapper, this.line);

    document.body.prepend(this.header);
  }
}