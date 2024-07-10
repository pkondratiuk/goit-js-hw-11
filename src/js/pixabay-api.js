import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { searchForm } from "../main";
import { renderPictures } from "./render-functions";

export function pixabeyApiPictures(query) {
    const API_KEY = "44868701-a6c2bf036a020cab1604664f3";
    const imageType = "photo";
    const orientation = "horizontal" 
    const safesearch = true;


    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}

function fetchError() {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}

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

