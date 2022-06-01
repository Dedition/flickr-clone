
const apiKey = process.env.UNSPLASH_API_KEY;
const secret = process.env.UNSPLASH_SECRET;
const baseUrl = 'https://api.unsplash.com/';
const accessToken = '&client_id=' + apiKey;
const secretToken = '&client_secret=' + secret;
const randomUrl = baseUrl + 'photos/?per_page=100' + accessToken;
https://api.unsplash.com/search/photos?page=10&query=concert&client_id=I8IfHiK0vVi3EeEQyra7YkAZ4ICKd8yAHl-W7n5va1s


module.exports = {
    randomUrl,
};




// function searchPhotos(query) {
//     return fetch(searchUrl + '&query=' + query)
//         .then(response => console.log(response))
//         .then(json => json.results);
// }

// return {
//     getRandomPhoto,
//     searchPhotos
// }

// const axios = require('axios');

// const yourApiKey = '4c466510d35994482c1beec767684df9';

// const data = {
//     method: 'flickr.photos.search',
//     api_key: yourApiKey,
//     text: 'cat', // Search Text
//     sort: 'interestingness-desc',
//     per_page: 12,
//     license: '4',
//     extras: 'owner_name,license',
//     format: 'json',
//     nojsoncallback: 1,
// };

// const parameters = new URLSearchParams(data);
// console.log(parameters);
// const url = `https://api.flickr.com/services/rest/?${parameters}`;
// console.log(url);

// axios.get(url)
//     .then(response => response.json())
//     .then(data => {
//         // We will impliment something later...
//     });

//     // To define axios, we need to install axios package.
//     // To import axios, you write
