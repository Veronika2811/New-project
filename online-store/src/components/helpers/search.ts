export function searchCard(value: string) {
  const elasticItems = document.querySelectorAll('.card');
  const warningText = document.querySelector('.warning') as HTMLHeadElement;

  const currentCard: boolean[] = [];

  if (value !== '') {
    elasticItems.forEach((el) => {
      const innerCard = (el as HTMLElement).dataset.name?.toLowerCase() as string;
      if (innerCard) {
        if (!innerCard.includes(value)) {
          el.classList.add('hide');
          currentCard.push(false);
        } else {
          el.classList.remove('hide');
          currentCard.push(true);
        }
      }
    });
  }

  if (value === null) {
    warningText.style.display = 'none';
    elasticItems.forEach((el) => {
      el.classList.remove('hide');
    });
  } else {
    const bol = new Set(currentCard);
    if (bol.size === 1) {
      warningText.style.display = 'block';
    } else {
      warningText.style.display = 'none';
    }
  }
}