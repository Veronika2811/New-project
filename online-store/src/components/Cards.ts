import { Filter } from './interfaces/interface';

class Card {

  draw(data: Filter[]): void {
    const rightSide = document.querySelector('.right-side') as HTMLElement;
    rightSide.innerHTML = '';

    const fragment = document.createDocumentFragment() as DocumentFragment;
    const newsItemTemp = document.querySelector('.card') as HTMLTemplateElement;

    data.forEach((item: Filter) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      (newsClone.querySelector('.card') as HTMLDivElement).dataset.sort = String(item.price);
      (newsClone.querySelector('.card') as HTMLDivElement).dataset.name = item.name;
      (newsClone.querySelector('.card-image') as HTMLDivElement).style.backgroundImage = `url(${ item.image })`;
      (newsClone.querySelector('.name') as HTMLHeadingElement).textContent = item.name;
      (newsClone.querySelector('.price span') as HTMLParagraphElement).textContent = String(item.price);
      (newsClone.querySelector('.year-issue span') as HTMLParagraphElement).textContent = String(item.year);
      (newsClone.querySelector('.type-decoration span') as HTMLParagraphElement).textContent = item.decoration;
      (newsClone.querySelector('.type-insert span') as HTMLParagraphElement).textContent = item.insert;
      (newsClone.querySelector('.type-metall span') as HTMLParagraphElement).textContent = item.metall;
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