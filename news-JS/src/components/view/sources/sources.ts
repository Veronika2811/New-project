import './sources.css';
import { SourcesArray, ObjectData } from '../../interface/interface';

class Sources {
    private objSources: ObjectData;

    constructor() {
        this.objSources = <ObjectData>{};
    }

    draw(data: SourcesArray[]) {
        const set: Set<string> = new Set();
        data.forEach((item: SourcesArray): void => {
            set.add(item.category);
        });
        [...set].forEach((category) => this.drawCategories(category, data));
    }

    drawCategories(category: string, data: SourcesArray[]): void {
        const categorySources = <HTMLDivElement>document.querySelector('.category-news');
        const fragmentCategory = <DocumentFragment>document.createDocumentFragment();
        const categoryNewsTemp: HTMLTemplateElement = document.querySelector('#categoryNewsTemp')!;
        const sourceClone = <DocumentFragment>categoryNewsTemp?.content.cloneNode(true);
        const categoryNewsLabel = <HTMLLabelElement>sourceClone.querySelector('.category-news__label');

        categoryNewsLabel.textContent = category;
        const objSources = this.objSources;
        const drawAlphabet = this.drawSources.bind(this);
        const categoryCheckbox: HTMLInputElement = sourceClone.querySelector('.category-news__checkbox')!;

        categoryCheckbox.addEventListener('input', function () {
            const alphabetNews = <HTMLDivElement>document.querySelector('.sources');
            alphabetNews.textContent = '';
            const arrayByCategory: SourcesArray[] = data.filter((item: SourcesArray) => item.category === category);
            if (this.checked) {
                objSources[category] = arrayByCategory;
            } else {
                delete objSources[category];
            }
            const arrNews = Object.values(objSources).flat(1);
            drawAlphabet(arrNews);
        });

        fragmentCategory.append(sourceClone);
        categorySources?.append(fragmentCategory);
    }

    drawSources(items: SourcesArray[]): void {
        const sources = document.querySelector('.sources');
        
        items.forEach((item: SourcesArray): void => {
            const fragment = document.createDocumentFragment();
            const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;
            const sourceClone = <DocumentFragment>sourceItemTemp?.content.cloneNode(true);
            const sourceItemName = <HTMLSpanElement>sourceClone.querySelector('.source__item-name');
            sourceItemName.textContent = item.name;
            const sourceItem = <HTMLDivElement>sourceClone.querySelector('.source__item');
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
            sources?.append(fragment);
        });
    }
}

export default Sources;
