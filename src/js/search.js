import fetch from 'node-fetch';
import { addCards } from './addCard';

const inputSearch = document.querySelector('.search-input');
const buttonSearch = document.querySelector('.btn-search');
const enterButton = document.querySelector('.enter');
const keyboard = document.querySelector('.keyboard');
const MIN_NUMBER = 0;
const NUMBER_PAGE = 1;
let textSearch = '';

export function translated(movieName) {
  let translatedWord = '';
  let url = `https://translate.yandex.net/api/v1.5/tr.json/translate
  ?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.
  089aea4237b51c6db082c966f27a7895cd1e8b44&text=${encodeURIComponent(movieName)}&lang=ru-en`;
  url = url.replace(/\n| /g, '');
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      translatedWord = data.text[MIN_NUMBER];
      addCards(translatedWord, NUMBER_PAGE);
    });
}

export default function search() {
  document.querySelector('.clear').addEventListener('click', () => {
    inputSearch.value = '';
  });

  buttonSearch.addEventListener('click', () => {
    if (!document.querySelector('.hide-keyboard')) {
      keyboard.click();
    }
    textSearch = inputSearch.value;
    if (textSearch !== undefined && textSearch !== '') {
      translated(textSearch);
    }
  });

  enterButton.addEventListener('click', () => {
    buttonSearch.click();
  });
}
