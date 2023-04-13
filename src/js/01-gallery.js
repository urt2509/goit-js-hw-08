// Add imports from SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

/**
 * Function creates HTML for gallery of images
 */
const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);

/**
 * Function insert created markup into HTML
 */
galleryList.insertAdjacentHTML('beforeend', markup.join(''));

/**
 * Create an instance for image lightbox
 */
const galleryListLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',

  captionDelay: 250,
});
