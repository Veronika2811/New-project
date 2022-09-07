export enum DOM {
  main = ` <main class="catalog">
  <section class="left-side">
    <h2 class="title-filter">Фильтры</h2>
    <div class="wrapper">
      <h2>Сортировка</h2>
      <select name="sort-fields" class="sort-params">
        <option id="1" value="fromAToZ" selected>По названию, от А до Я</option>
        <option id="2" value="fromZToA">По названию, от Я до А</option>
        <option id="3" value="fromMinToMaxPrice">Увеличение цены</option>
        <option id="4" value="fromMaxToMinPrice">Уменьшение цены</option>
      </select>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2>Цена</h2>
      <div class="filter-price__slider" id="range-slider-price"></div>
      <div class="filter-price__inputs">
      <label for="" class="filter-price__label">
        <span class="filter-prise__text">от</span>
        <input type="number" min="10" max="200" placeholder="10" class="filter-price__input" id="input-min-price" readonly="readonly">
        <span class="filter-prise__text">$</span>
      </label>
      <label for="" class="filter-price__label">
        <span class="filter-prise__text">до</span>
        <input type="number" min="10" max="200" placeholder="200" class="filter-price__input" id="input-max-price" readonly="readonly">
        <span class="filter-prise__text">$</span>
      </label>
    </div>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2>Год выпуска</h2>
      <div class="filter-price__slider" id="range-slider-year"></div>
      <div class="filter-price__inputs">
      <label for="" class="filter-price__label">
        <input type="number" min="2010" max="2022" placeholder="2010" class="filter-price__input" id="input-3" readonly="readonly">
      </label>
      <label for="" class="filter-price__label">
        <input type="number" min="2010" max="2022" placeholder="2022" class="filter-price__input" id="input-4" readonly="readonly">
      </label>
    </div>
    </div>
    <hr class="line">
    <div class="filter">
    <div class="wrapper">
      <h2>Наши предложения</h2>
      <ul class="settings settings-offer">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Новинка"
            type="checkbox"
            value="offer"
            id="offer-1">
          <label for="offer-1" class="custom-checkbox__label">Новинки</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Популярное"
            type="checkbox"
            value="offer"
            id="offer-2">
          <label for="offer-2" class="custom-checkbox__label">Популярное</label>
        </li>
      </ul>
    </div>
    <hr class="line">
    <div class="wrapper">
      <h2>Вид украшения</h2>
      <ul class="settings settings-decoration">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Кольцо"
            type="checkbox"
            value="decoration"
            id="type-decoration-1">
          <label for="type-decoration-1" class="custom-checkbox__label">Кольцо</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Серьги"
            type="checkbox"
            value="decoration"
            id="type-decoration-2">
          <label for="type-decoration-2" class="custom-checkbox__label">Серьги</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Цепочка"
            type="checkbox"
            value="decoration"
            id="type-decoration-3">
          <label for="type-decoration-3" class="custom-checkbox__label">Цепочка</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Браслет"
            type="checkbox"
            value="decoration"
            id="type-decoration-4">
          <label for="type-decoration-4" class="custom-checkbox__label">Браслет</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Заколка"
            type="checkbox"
            value="decoration"
            id="type-decoration-5">
          <label for="type-decoration-5" class="custom-checkbox__label">Заколка</label>
        </li>
      </ul>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2>Вид вставки</h2>
      <ul class="settings settings-insert">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Без вставки"
            type="checkbox"
            value="typeInsert"
            id="type-insert-1">
          <label for="type-insert-1" class="custom-checkbox__label">Без вставки</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Бриллиант"
            type="checkbox"
            value="typeInsert"
            id="type-insert-2">
          <label for="type-insert-2" class="custom-checkbox__label">Бриллиант</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Фианит"
            type="checkbox"
            value="typeInsert"
            id="type-insert-3">
          <label for="type-insert-3" class="custom-checkbox__label">Фианит</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Жемчуг"
            type="checkbox"
            value="typeInsert"
            id="type-insert-4">
          <label for="type-insert-4" class="custom-checkbox__label">Жемчуг</label>
        </li>
      </ul>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2>Вид металла</h2>
      <ul class="settings settings-metall">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Золото"
            type="checkbox"
            value="typeMetall"
            id="type-metall-1">
          <label for="type-metall-1" class="custom-checkbox__label">Золото</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Серебро"
            type="checkbox"
            value="typeMetall"
            id="type-metall-2">
          <label for="type-metall-2" class="custom-checkbox__label">Серебро</label>
        </li>
      </ul>
    </div>
    </div>
    <hr class="line">
    <div class="wrapper-btn">
      <button class="btn btn_reset-filter">Сброс фильтров</button>
      <button class="btn btn_reset">Сброс настроек</button>
    </div>
  </section>
  <section class="right-side">
  </section>
</main>`,
}