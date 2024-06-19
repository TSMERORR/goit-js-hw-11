import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');

function onSearch(event) {
  event.preventDefault();
  const query = event.target.elements.searchword.value.trim();
  galleryEl.innerHTML = '';
  if (query === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
  loaderEl.classList.remove('is-hidden');

  fetchPhotos(query)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }

      galleryEl.innerHTML = createMarkup(imagesData.hits);
      const lightbox = new SimpleLightbox('.item-gallery__link', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearch);