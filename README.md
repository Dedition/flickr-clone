<h1 align= "center" dir="auto">
  Welcome to Flickr
</h1>
<h5 align= "center" dir="auto">
  created by: Leo Ladipo
  <br>clone: Flickr</br>
</h5>

Flickr is a website for users to upload and browse images about anything they want. It is <em>heavily</em>inspired by [Flickr](https://www.flickr.com/).

# FlickrClone

Try at the live site: [FlickrClone](https://flickrpixelclone.herokuapp.com/)

## Technologies/languages/APIs used in this project

JavaScript, Express, Postgres, Sequelize, HTML5, CSS, React, Redux, Unsplash API, AWS, Multer

## Libraries used

React-icons, FontAwesome, Unsplash API, AWS-SDK

## Getting started

1. Clone this repository

   `git clone https://github.com/Dedition/flickr-clone.git`

2. Install dependencies

   `npm install` || `npm i`

3. Create a .env file based on the .env.example given in the backend directory

5. Migrate and Seed models

   `npx dotenv sequelize db:migrate` &&
   `npx dotenv sequelize db:seed:all`

6. Start the app using:

   `npm start`

7. You can use the Demo user or create an account

## Features

FlickrClone is a website for users to upload and browse images about anything they desire. Logged in users can dynamically create, edit and delete images along with adding and removing images without redirecting. Logged in users can:

- View All Images and image details
- Add/View/Edit/Delete their own Images
- Add/View/Delete their comments on Images
- Search for Images by name
