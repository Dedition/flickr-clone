<h1 align= "center" dir="auto">
  Welcome to Flickr
</h1>
<h5 align= "center" dir="auto">
  created by: Leo Ladipo
  <br>clone: Flickr</br>
</h5>

FlickrClone is a website for users to upload and browse images about anything they want. It is <em>heavily</em> inspired by [Flickr](https://www.flickr.com/).

# FlickrClone

Try at the live site: [FlickrClone](https://flickrpixelclone.herokuapp.com/)

## Technologies/languages/APIs used in this project

JavaScript, Express, Postgres, Sequelize, HTML5, CSS, React, Redux, Unsplash API, Flickr API, AWS, Multer, Mockaroo API

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

## Splash Page

![Screen Shot 2022-06-06 at 11 21 40](https://user-images.githubusercontent.com/87998262/172191654-465a6254-23ce-45a5-b594-84baf52156d4.png)

## Explore Page

<img width="1646" alt="Screen Shot 2022-06-06 at 11 20 33" src="https://user-images.githubusercontent.com/87998262/172191428-42d8c274-3819-472f-83a6-3596d38670c3.png">

## Login Page

![Screen Shot 2022-06-06 at 11 22 27](https://user-images.githubusercontent.com/87998262/172191803-38e67c3b-1545-48f1-9629-cb0884eb2a61.png)

## Signup Page

![Screen Shot 2022-06-06 at 11 22 52](https://user-images.githubusercontent.com/87998262/172191891-c34b545a-d2ec-4a63-ab76-32aa0183bdb3.png)

## Upload Image Page

![Screen Shot 2022-06-06 at 11 26 18](https://user-images.githubusercontent.com/87998262/172192497-5c674383-db46-47f1-97d0-eca643d848cc.png)

## Image Detail Page

![Screen Shot 2022-06-06 at 11 27 08](https://user-images.githubusercontent.com/87998262/172192650-4f05f226-e33c-463c-8127-c1e7e4c697a8.png)

## Comment Section

![Screen Shot 2022-06-06 at 11 27 33](https://user-images.githubusercontent.com/87998262/172192716-73f5a84c-1a3b-40ae-bf57-bfaf5e36b06b.png)
