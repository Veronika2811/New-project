import './sources.css';
import { ISources, ObjectData } from '../../interface/interface';

class Sources {
    private objSources: ObjectData;

    constructor() {
        this.objSources = <ObjectData>{};
    }

    draw(data: ISources[]) {
        const set: Set<string> = new Set();
        data.forEach((item: ISources): void => {
            set.add(item.category);
        });
        [...set].forEach((category) => this.drawCategories(category, data));
    }

    drawCategories(category: string, data: ISources[]): void {
        const categorySources = document.querySelector('.category-news');
        const fragmentCategory = document.createDocumentFragment();
        const categoryNewsTemp: HTMLTemplateElement | null = document.querySelector('#categoryNewsTemp');
        const sourceClone = <HTMLElement>categoryNewsTemp?.content.cloneNode(true);
        const categoryNewsLabel = <HTMLElement>sourceClone.querySelector('.category-news__label');
        categoryNewsLabel ? (categoryNewsLabel.textContent = category) : null;
        const objSources = this.objSources;
        const drawAlphabet = this.drawSources.bind(this);
        const categoryCheckbox: HTMLInputElement | null = sourceClone.querySelector('.category-news__checkbox');
        categoryCheckbox
            ? categoryCheckbox.addEventListener('input', function () {
                  const alphabetNews = document.querySelector('.sources');
                  alphabetNews ? (alphabetNews.textContent = '') : null;
                  const arrayByCategory: ISources[] = data.filter((item: ISources) => item.category === category);
                  if (this.checked) {
                      objSources[category] = arrayByCategory;
                  } else {
                      delete objSources[category];
                  }
                  const arrNews = Object.values(objSources).flat(1);
                  drawAlphabet(arrNews);
              })
            : null;
        fragmentCategory.append(sourceClone);
        categorySources?.append(fragmentCategory);
    }

    drawSources(items: ISources[]): void {
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.textContent = '';
        }
        items.forEach((item: ISources): void => {
            const fragment = document.createDocumentFragment();
            const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
            const sourceClone = <HTMLElement>sourceItemTemp?.content.cloneNode(true);
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            sourceItemName ? (sourceItemName.textContent = item.name) : null;
            const sourceItem = sourceClone.querySelector('.source__item');
            sourceItem ? sourceItem.setAttribute('data-source-id', item.id) : null;
            fragment.append(sourceClone);
            sources?.append(fragment);
        });
    }
}

export default Sources;