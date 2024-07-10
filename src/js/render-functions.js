import { picturesContainer } from "../main";
import { pixabeyApiPictures } from "./pixabay-api";
const data = pixabeyApiPictures.hits;
console.log(data);

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

picturesContainer.insertAdjacentHTML("afterbegin", renderPictures(data));

