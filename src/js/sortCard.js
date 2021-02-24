const buttons = [...document.querySelectorAll('.sort')];
const NUMBER_FOR_SORT = 2;
const MIN_NUMBER = 0;
let isSortFromSmallest = false;

function sort(index) {
  const cards = [...document.querySelectorAll('.swiper-slide')];
  cards.sort((a, b) => {
    const firstValue = a.children[index].innerText.slice(0, 4);
    const secondValue = b.children[index].innerText.slice(0, 4);
    return secondValue - firstValue;
  });
  if (!isSortFromSmallest) {
    cards.reverse();
  }
  for (let i = 0; i < cards.length - 1; i++) {
    cards[i].before(cards[i + 1]);
  }
}

function sortCards(value) {
  sort(value);
  isSortFromSmallest = !isSortFromSmallest;
}

document.querySelector('.sort-buttons').addEventListener('click', (element) => {
  const firstPagination = document.querySelector('.swiper-pagination-bullet');
  const numberButton = buttons.indexOf(element.target);
  if (numberButton >= MIN_NUMBER) {
    firstPagination.click();
    sortCards(NUMBER_FOR_SORT + numberButton);
  }
});
