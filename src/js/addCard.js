import fetch from 'node-fetch';
import swiper from './swiperAnimation';
import { createCard } from './card.component';


const NUMBER_CARDS_FOR_UPLOAD = 6;
const MIN_NUMBER = 0;
const MAX_CARDS = 9;
const loadingIndicator = document.querySelector('.cssload-container');
const textResult = document.querySelector('.show-result');
let page = 1;
let numberCard = 0;
let translatedWord = '';
let isUpload = false;

function loadImages() {
  const lastImage = [].slice.call(document.querySelectorAll('img[data-src]'), -1);
  lastImage[0].setAttribute('src', lastImage[0].getAttribute('data-src'));
  lastImage[0].onload = function load() {
    lastImage[0].removeAttribute('data-src');
  };
}

export function getDataMovie(id) {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=e5094dd6`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      createCard(id, data, swiper);
      loadImages();
      isUpload = false;
    });
}

function updateSwipe() {
  const cards = document.querySelectorAll('.swiper-slide');
  const paginations = document.querySelectorAll('.swiper-pagination-bullet');
  cards.forEach((card) => { card.remove(); });
  paginations.forEach((pagination) => { pagination.remove(); });
}

function showTrueResult() {
  textResult.classList.remove('visible-false');
  textResult.classList.add('visible-true');
  textResult.innerText = `Showing results for "${translatedWord}"`;
}

function showWrongResult() {
  textResult.classList.remove('visible-true');
  textResult.classList.add('visible-false');
  textResult.innerText = `No results for "${translatedWord}"`;
}

function recordingData(data) {
  while (numberCard < MAX_CARDS) {
    numberCard++;
    if (data.Search[numberCard]) {
      const id = data.Search[numberCard].imdbID;
      getDataMovie(id);
    }
  }
  numberCard = MIN_NUMBER;
}

export function getMovieData(movieName) {
  if (loadingIndicator) {
    loadingIndicator.classList.remove('hide');
  }
  const url = `https://www.omdbapi.com/?s=${translatedWord}&page=${page}&apikey=e5094dd6`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === 'True') {
        if (movieName) {
          updateSwipe();
        }
        recordingData(data);
        showTrueResult();
      } else if (movieName) {
        showWrongResult();
      }
    })
    .finally(() => {
      loadingIndicator.classList.add('hide');
    });
}

export function addCards(movieName, numberPage) {
  translatedWord = movieName;
  page = numberPage;
  getMovieData(movieName);
}

function addNewCards() {
  if ((swiper.slides.length - swiper.activeIndex) < NUMBER_CARDS_FOR_UPLOAD && !isUpload) {
    isUpload = true;
    page++;
    getMovieData();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.swiper-button-next').addEventListener('click', () => {
    addNewCards();
  });

  document.querySelector('.swiper-wrapper').addEventListener('mousedown', () => {
    addNewCards();
  });

  document.querySelector('.swiper-wrapper').addEventListener('touchstart', () => {
    addNewCards();
  });
});
