import { Filter } from './interfaces/interface';

class Card {

  draw(data: Filter[]): void {
    // const news: Filter[] = data.length >= 20 ? data.filter((_item: Filter, idx: number) => idx < 20) : data;

    const rightSide = document.querySelector('.right-side') as HTMLElement;
    rightSide.innerHTML = '';

    const fragment = document.createDocumentFragment() as DocumentFragment;
    const newsItemTemp = document.querySelector('.card') as HTMLTemplateElement;

    data.forEach((item: Filter) => {
      // newsItemTemp.setAttribute(`${data - sort}`, item.price);
      // newsItemTemp.dataset.sort = String(parseInt(item.price));
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      // newsItemTemp.setAttribute(`${data - sort}`, item.price);
      (newsClone.querySelector('.card') as HTMLElement).dataset.sort = String(parseInt(item.price));
      (newsClone.querySelector('.card') as HTMLElement).dataset.name = item.name;
      (newsClone.querySelector('.card-image') as HTMLDivElement).style.backgroundImage = `url(${ item.image })`;
      (newsClone.querySelector('.name') as HTMLHeadingElement).textContent = item.name;
      (newsClone.querySelector('.price span') as HTMLSpanElement).textContent = item.price;
      (newsClone.querySelector('.year-issue span') as HTMLSpanElement).textContent = item.year;
      (newsClone.querySelector('.type-decoration span') as HTMLSpanElement).textContent = item.decoration;
      (newsClone.querySelector('.type-insert span') as HTMLSpanElement).textContent = item.typeInsert;
      (newsClone.querySelector('.type-metall span') as HTMLSpanElement).textContent = item.typeMetall;
      (newsClone.querySelector('.img') as HTMLImageElement);

      fragment.append(newsClone);
    });
    rightSide.append(fragment);
  }

  drawText(): void {
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    rightSide.innerHTML = '';

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('.text-warning') as HTMLTemplateElement;
    const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

    (newsClone.querySelector('.warning-text') as HTMLHeadingElement).textContent = 'Извините, совпадений не обнаружено';
    fragment.append(newsClone);

    rightSide.append(fragment);
  }
}

export default Card;