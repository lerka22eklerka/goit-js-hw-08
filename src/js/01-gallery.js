// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsCreate = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
</a>`
  )
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemsCreate);
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

console.log(galleryItems);
