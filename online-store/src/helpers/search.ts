export function searchCard(value: string) {
  const currentСard = document.querySelectorAll('.card');
  const warningText = <HTMLHeadElement>document.querySelector('.warning');

  const currentCard: boolean[] = [];

  if (value !== '') {
    currentСard.forEach((el) => {
      const innerCard = (<HTMLElement>el).dataset.name?.toLowerCase() as string;
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

    const booleanObj = new Set(currentCard);

    if (booleanObj.size === 1) {
      warningText.style.display = 'block';
    } else {
      warningText.style.display = 'none';
    }

  } else {
    warningText.style.display = 'none';

    currentСard.forEach((el) => {
      el.classList.remove('hide');
    });
    
  }
}