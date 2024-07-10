import { pixabeyApiPictures } from "./pixabay-api";

const data = pixabeyApiPictures.hits;

export function renderPictures(arr) {
    return arr.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
          />
        </a>
    `).join("");
}
const picturesContainer = document.querySelector(".pictures");
picturesContainer.insertAdjacentHTML("afterbegin", renderPictures(data));

