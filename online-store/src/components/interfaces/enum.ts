export enum DOM {
  header = `<header class="header">
              <div class="header-wrapper">
                <div class="logo">
                  <h1 class="logo__title">Online-Store</h1>
                </div>
                <h3 class="warning"></h3>
                <nav class="menu">
                  <ul class="menu__list">
                    <li>
                      <input placeholder="Поиск..." type="search" class="search" autocomplete="off" maxlength="15" autofocus>
                    </li>
                    <li class="cart-item">
                      <img src="./assets/svg/cart.svg" alt="cart" class="cart">
                      <span class="items-the-cart">0</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <hr class="line">
            </header>`,
  main = ` <main class="catalog">
  <section class="left-side">
    <h2 class="title-filter">Фильтры</h2>
    <div class="wrapper">
      <h2 class="title">Сортировка</h2>
      <select name="sort-fields" class="sort-params">
        <option id="1" value="value1" selected>По названию, от А до Я</option>
        <option id="2" value="value2">По названию, от Я до А</option>
        <option id="3" value="value3">Увеличение цены</option>
        <option id="4" value="value4">Уменьшение цены</option>
      </select>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2 class="title">Цена</h2>
      <div class="filter-price__slider" id="range-slider"></div>
      <div class="filter-price__inputs">
      <label for="" class="filter-price__label">
        <span class="filter-prise__text">от</span>
        <input type="number" min="10" max="200" placeholder="10" class="filter-price__input" id="input-1">
        <span class="filter-prise__text">$</span>
      </label>
      <label for="" class="filter-price__label">
        <span class="filter-prise__text">до</span>
        <input type="number" min="10" max="200" placeholder="200" class="filter-price__input" id="input-2">
        <span class="filter-prise__text">$</span>
      </label>
    </div>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2 class="title">Год выпуска</h2>
      <div class="filter-price__slider" id="range-slider-2"></div>
      <div class="filter-price__inputs">
      <label for="" class="filter-price__label">
        <input type="number" min="2010" max="2022" placeholder="2010" class="filter-price__input" id="input-3">
      </label>
      <label for="" class="filter-price__label">
        <input type="number" min="2010" max="2022" placeholder="2022" class="filter-price__input" id="input-4">
      </label>
    </div>
    </div>
    <hr class="line">
    <div class="filter">
    <div class="wrapper">
      <h2 class="title">Наши предложения</h2>
      <ul class="settings settings-offer">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Новинка"
            type="checkbox"
            value="offer"
            id="offer-1">
          <label for="offer-1">Новинки</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Популярное"
            type="checkbox"
            value="offer"
            id="offer-2">
          <label for="offer-2">Популярное</label>
        </li>
      </ul>
    </div>
    <hr class="line">
    <div class="wrapper">
      <h2 class="title">Вид украшения</h2>
      <ul class="settings settings-decoration">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Кольцо"
            type="checkbox"
            value="decoration"
            id="type-decoration-1">
          <label for="type-decoration-1">Кольцо</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Серьги"
            type="checkbox"
            value="decoration"
            id="type-decoration-2">
          <label for="type-decoration-2">Серьги</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Цепочка"
            type="checkbox"
            value="decoration"
            id="type-decoration-3">
          <label for="type-decoration-3">Цепочка</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Браслет"
            type="checkbox"
            value="decoration"
            id="type-decoration-4">
          <label for="type-decoration-4">Браслет</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Заколка"
            type="checkbox"
            value="decoration"
            id="type-decoration-5">
          <label for="type-decoration-5">Заколка</label>
        </li>
      </ul>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2 class="title">Вид вставки</h2>
      <ul class="settings settings-insert">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Без вставки"
            type="checkbox"
            value="typeInsert"
            id="type-insert-1">
          <label for="type-insert-1">Без вставки</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Бриллиант"
            type="checkbox"
            value="typeInsert"
            id="type-insert-2">
          <label for="type-insert-2">Бриллиант</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Фианит"
            type="checkbox"
            value="typeInsert"
            id="type-insert-3">
          <label for="type-insert-3">Фианит</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Жемчуг"
            type="checkbox"
            value="typeInsert"
            id="type-insert-4">
          <label for="type-insert-4">Жемчуг</label>
        </li>
      </ul>
    </div>
    <hr class="line" />
    <div class="wrapper">
      <h2 class="title">Вид металла</h2>
      <ul class="settings settings-metall">
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Золото"
            type="checkbox"
            value="typeMetall"
            id="type-metall-1">
          <label for="type-metall-1">Золото</label>
        </li>
        <li class="settings__item">
          <input
            class="custom-checkbox"
            name="Серебро"
            type="checkbox"
            value="typeMetall"
            id="type-metall-2">
          <label for="type-metall-2">Серебро</label>
        </li>
      </ul>
    </div>
    </div>
    <hr class="line">
    <div class="wrapper-btn">
      <button class="btn btn_view">Сброс фильтров</button>
      <button class="btn btn_reset">Сброс настроек</button>
    </div>
  </section>
  <section class="right-side">
  
  </section>
</main>`,
  footer = `<footer>
  <span>© 2022</span>
  <div class="github">
    <a href="https://github.com/Veronika2811" class="github">
      <img
        class="footer__icon-git"
        src="./assets/svg/github.svg"
        alt="GitHub">
      <span>Veronika2811</span>
    </a>
  </div>
  <a href="https://rs.school/js/">
    <img
      class="footer__icon-rsschool"
      src="./assets/svg/rs_school.svg"
      alt="RSSchool">
  </a>
  </footer>`,
}