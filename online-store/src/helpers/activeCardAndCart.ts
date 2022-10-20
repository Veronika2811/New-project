export default function activeCardAndCart() {
  // Cart
  const itemcart = document.querySelector('.items-the-cart') as HTMLSpanElement;

  if (localStorage.getItem('cart') !== null) {
    itemcart.innerHTML = JSON.parse(localStorage.getItem('cart') as string);
  } else {
    itemcart.innerHTML = '0';
  }

  // Active card
  const cart = document.querySelectorAll('.block-cart');
  const modal = document.querySelector('.modal') as HTMLDivElement;
  const body = document.querySelector('.body') as HTMLBodyElement;

  let activeCardName: string[] = [];

  if (localStorage.getItem('activeCard') !== null) {
    activeCardName = JSON.parse(
      localStorage.getItem('activeCard') as string);
    cart.forEach((el) => {
      if (
        activeCardName.includes(el.parentElement?.dataset.name as string)
      ) {
        el.classList.add('active-card');
      }
    });
  }

  cart.forEach((el) => {
    el.addEventListener('click', () => {
      const nameCard = el.parentElement?.dataset.name as string;

      if (el.classList.contains('active-card')) {
        el.classList.remove('active-card');

        if (activeCardName.length > 0) {
          activeCardName = activeCardName.filter(function (elem) {
            return elem !== nameCard;
          });
        }
        itemcart.innerHTML = String(activeCardName.length);

        localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
        localStorage.setItem('activeCard', JSON.stringify(activeCardName));
      } else {
        if (Number(itemcart.innerHTML) >= 20) {
          modal.style.display = 'block';
          body.classList.add('open');
        } else if (Number(itemcart.innerHTML) < 20) {
          modal.style.display = 'none';
          body.classList.remove('open');

          el.classList.add('active-card');
          activeCardName.push(nameCard);
          itemcart.innerHTML = String(activeCardName.length);
        }

        localStorage.setItem('cart', JSON.stringify(itemcart.innerHTML));
        localStorage.setItem('activeCard', JSON.stringify(activeCardName));
      }
    });
  });
}