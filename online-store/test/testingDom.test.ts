// import checkedCheck from '../src/components/helpers/checkedCheckbox';
// import '@testing-library/jest-dom/extend-expect';
// import { screen } from '@testing-library/dom';

// test('is there input autofocus', () => {
//   document.body.innerHTML = `
//     <input placeholder="Поиск..." data-testid="element-to-focus" type="search" class="search" autocomplete="off" maxlength="15" autofocus="">
//   `;
  
//   const input = screen.getByTestId('element-to-focus');

//   input.focus();
//   expect(input).toHaveFocus();
// });

// test('create object from clicked checkbox', () => {
//   document.body.innerHTML = `
//     <input class="custom-checkbox" name="Кольцо" type="checkbox" value="decoration" id="type-decoration-1">
//     <input class="custom-checkbox" name="Серьги" type="checkbox" value="decoration" id="type-decoration-2">
//     <input class="custom-checkbox" name="Цепочка" type="checkbox" value="decoration" id="type-decoration-3" checked="checked>
//     <input class="custom-checkbox" name="Браслет" type="checkbox" value="decoration" id="type-decoration-4">
//     <input class="custom-checkbox" name="Заколка" type="checkbox" value="decoration" id="type-decoration-5">
//   `;

//   const currentCheckbox = document.querySelectorAll('input');

//   expect(checkedCheck(currentCheckbox)).toEqual({ offer: [], decor: ['Цепочка'], insert: [], metall: [] });
// });

// test('contains a child element', () => {
//   document.body.innerHTML = `
//     <div class="logo">
//       <h1>Online-Store</h1>
//     </div>
//   `;

//   const parent = document.querySelector('.logo');
//   const child = document.querySelector('h1');

//   expect(parent).toContainElement(child);
// });

// test('does this element have an attribute', () => {
//   document.body.innerHTML = `
//     <img src="./assets/svg/cart.svg" alt="cart1" class="cart">
//   `;
//   const elementImage = document.querySelector('.cart');

//   expect(elementImage).toHaveAttribute('alt');
// });

// test('whether this node has text content', () => {
//   document.body.innerHTML = `
//     <h1 data-testid="text-content">Online-Store</h1>
//   `;

//   const element = screen.getByTestId('text-content');

//   expect(element).toHaveTextContent('Online-Store');
// });

// test('whether the form element has the specified value', () => {
//   document.body.innerHTML = `
//     <select name="sort-fields" class="sort-params">
//       <option id="1" value="value1" selected>По названию, от А до Я</option>
//       <option id="2" value="value2">По названию, от Я до А</option>
//       <option id="3" value="value3">Увеличение цены</option>
//       <option id="4" value="value4">Уменьшение цены</option>
//     </select>
//   `;

//   const selectInput = document.querySelector('.sort-params');

//   expect(selectInput).toHaveValue('value1');
// });

// test('visibly element', () => {
//   document.body.innerHTML = `
//     <h3 class="warning" style="display: none;">Извините, совпадений не обнаружено</h3>
//   `;

//   expect(screen.getByText('Извините, совпадений не обнаружено')).not.toBeVisible();
// });