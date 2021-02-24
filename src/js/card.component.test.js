import { checkData, createStringHtml } from './card.component';

describe('checkData', () => {
  test('should return return an empty string or the same string', () => {
    expect(checkData()).toBeDefined();
    expect(checkData()).toEqual('');

    expect(checkData('dream')).toBeDefined();
    expect(checkData('dream')).toEqual('dream');
  });
});

describe('createStringHtml', () => {
  test('should return html code card', () => {
    expect(createStringHtml(1, 2, 3, 4, 5)).toBeDefined();
    let checkHtmlCodeCard = '<div class="swiper-slide"><a class="name-movie"';
    checkHtmlCodeCard += ` href="https://www.imdb.com/title/1/">2</a><img class="poster"`;
    checkHtmlCodeCard += ` data-src=3><p>4</p><p class="rating">5</p></div>`;
    expect(createStringHtml(1, 2, 3, 4, 5)).toEqual(checkHtmlCodeCard);
  });
});

