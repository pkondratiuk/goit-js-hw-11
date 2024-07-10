import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { pixabeyApiPictures } from "./js/pixabay-api";
import { renderPictures } from "./js/render-functions";


const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formValue = form.elements.text.value.toLowerCase();

    pixabeyApiPictures(formValue)
        .then(renderPictures)
        .catch(fetchError)
        .finally(form.reset());
}

function fetchError() {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}

