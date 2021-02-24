export function checkData(data) {
  if (data !== 'N/A' && data !== undefined) {
    return data;
  }
  return '';
}

export function createStringHtml(id, name, poster, year, rating) {
  const htmlCodeCard = `<div class="swiper-slide">
   <a class="name-movie" href="https://www.imdb.com/title/${id}/">
   ${name}</a><img class="poster" data-src=${poster}>
   <p>${year}</p><p class="rating">${rating}</p></div>`;
  return htmlCodeCard;
}

export function createCard(id, data, parentElement) {
  const rating = checkData(data.imdbRating);
  const name = checkData(data.Title);
  const poster = checkData(data.Poster);
  const year = checkData(data.Year);
  const htmlCodeCard = createStringHtml(id, name, poster, year, rating);
  parentElement.appendSlide(htmlCodeCard);
}
