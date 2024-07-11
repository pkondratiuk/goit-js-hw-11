const params = {
    key: "44868701-a6c2bf036a020cab1604664f3",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export function generateHttpsQuery(formValue) {
    params.q = formValue;
    const queryString = new URLSearchParams(params).toString();
    return `https://pixabay.com/api/?${queryString}`;
}

export function fetchPictures(httpsQuery) {
    return fetch(httpsQuery)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}
