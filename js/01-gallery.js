import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item"> 
      <a class="gallery__link" href="${original}">
        <img 
          src=${preview}
          alt=${description} 
          data-source="${original}"
          class="gallery__image" />
      </a>
    </div>`
  );
});

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) {
    return;
  }
  const source = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img
      src=${source}
      alt=${e.target.alt}
      width="800" 
      height="600"
    />
  `);

  instance.show();
});
