import createDomNode from '../../helpers/createDomNode';

export default class Main {
  private main;

  private leftSection;

  private titleFilter;

  private wrapperSort;

  private titleSort;

  private select;

  private optionAz;

  private optionZa;

  private option1;

  private option9;

  private line;

  constructor() {
    this.main = createDomNode('main', 'catalog');

    this.leftSection = createDomNode('section', 'left-side');

    this.titleFilter = createDomNode('h2', 'title-filter', 'Фильтры');

    this.wrapperSort = createDomNode('div', 'wrapper');
    this.titleSort = createDomNode('h2', 'title', 'Сортировка');
    this.select = createDomNode('select', 'sort-params') as HTMLSelectElement;
    this.select.name = 'sort-fields';

    this.optionAz = createDomNode('option', 'option', 'По названию, от А до Я') as HTMLOptionElement;
    this.optionAz.id = '1';
    this.optionAz.value = 'value1';

    this.optionZa = createDomNode('option', 'option', 'По названию, от Я до А') as HTMLOptionElement;
    this.optionZa.id = '2';
    this.optionZa.value = 'value2';

    this.option1 = createDomNode('option', 'option', 'Увеличение цены') as HTMLOptionElement;
    this.option1.id = '3';
    this.option1.value = 'value3';

    this.option9 = createDomNode('option', 'option', 'Уменьшение цены') as HTMLOptionElement;
    this.option9.id = '4';
    this.option9.value = 'value4';

    this.line = createDomNode('hr', 'line');

    this.select.append(this.optionAz, this.optionZa, this.option1, this.option9);

    this.wrapperSort.append(this.titleSort, this.select);

    // Range Price
    const wrapperPrice = createDomNode('div', 'wrapper');
    const titlePrice = createDomNode('h2', 'title', 'Цена');
    const filterPriceSlider = createDomNode('div', 'filter-price__slider');
    filterPriceSlider.id = 'range-slider-price';

    const filterPriceInputs = createDomNode('div', 'filter-price__inputs');

    const filterPriceLabelMin = createDomNode('label', 'filter-price__label');

    const filterPriceTextMin = createDomNode('span', 'filter-prise__text', 'от');

    const filterPriceInputMin = createDomNode('input', 'filter-price__input') as HTMLInputElement;
    filterPriceInputMin.type = 'number';
    filterPriceInputMin.min = '10';
    filterPriceInputMin.max = '200';
    filterPriceInputMin.placeholder = '10';
    filterPriceInputMin.id = 'input-min-price';
    filterPriceInputMin.readOnly = true;

    const filterPriceText$ = createDomNode('span', 'filter-prise__text', '$');

    filterPriceLabelMin.append(filterPriceTextMin, filterPriceInputMin, filterPriceText$);

    const filterPriceLabelMax = createDomNode('label', 'filter-price__label');

    const filterPriceTextMax = createDomNode('span', 'filter-prise__text', 'до');

    const filterPriceInputMax = createDomNode('input', 'filter-price__input') as HTMLInputElement;
    filterPriceInputMax.type = 'number';
    filterPriceInputMax.min = '10';
    filterPriceInputMax.max = '200';
    filterPriceInputMax.placeholder = '200';
    filterPriceInputMax.id = 'input-max-price';
    filterPriceInputMax.readOnly = true;

    filterPriceLabelMax.append(filterPriceTextMax, filterPriceInputMax, filterPriceText$);

    filterPriceInputs.append(filterPriceLabelMin, filterPriceLabelMax);

    wrapperPrice.append(titlePrice, filterPriceSlider, filterPriceInputs);

    // Range Year
    const wrapperYear = createDomNode('div', 'wrapper');
    const titleYear = createDomNode('h2', 'title', 'Цена');
    const filterYearSlider = createDomNode('div', 'filter-price__slider');
    filterYearSlider.id = 'range-slider-year';

    wrapperYear.append(titleYear, filterYearSlider);

    const rightSection = createDomNode('section', 'right-side');

    this.leftSection.append(this.titleFilter, this.wrapperSort, this.line, wrapperPrice, this.line, wrapperYear);
    this.main.append(this.leftSection, rightSection);
    document.body.append(this.main);
  }
}