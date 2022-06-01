require('dotenv').config();
const apiKey = process.env.UNSPLASH_API_KEY;
const secret = process.env.UNSPLASH_SECRET;
const baseUrl = 'https://api.unsplash.com/';
const accessToken = '&client_id=' + apiKey;
const secretToken = '&client_secret=' + secret;
const randomUrl = baseUrl + 'photos/?per_page=200' + accessToken;


module.exports = { randomUrl };
