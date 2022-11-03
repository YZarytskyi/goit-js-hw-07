import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${original}">
      <img 
        src=${preview}
        alt=${description} 
        class="gallery__image" />
    </a>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionsData: "alt",
  captionDelay: 250,
});
