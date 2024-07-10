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
