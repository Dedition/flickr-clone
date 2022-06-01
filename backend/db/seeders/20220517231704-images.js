'use strict';
const { randomUrl } = require('../unsplashAPI/unsplash');
const fetch = require('node-fetch');
const newArr = [];

async function getRandomPhoto() {
  const locationsArr = ['London', 'Mexico', 'California', 'New Jersey', 'New Mexico', 'Chicago', 'El Salvador', 'Florida', 'Kentucky', 'Spain', 'Costa Rica', 'San Francisco,', 'New York', 'Barcelona', 'Madrid', 'Berlin', 'Rome', 'Paris', 'Kentucky', 'Amsterdam', 'Sweden']
  const titleArr = ['Life is but a dream', 'A good day washes the tears away', 'Life is life is life', 'A sight to see', 'Life is 10% what happens to you and 90% how you react to it.', 'The Road Best Traveled', 'By the Seaside', 'Favorite Adventures', 'Without a map', 'Hi', 'Welcome to the world', 'Penny for your thoughts', 'A time in peace', 'A time stilled', 'Live. Love. Laugh.', 'Hello mum', 'This is cool', 'Wowzer']
  const res = await fetch(randomUrl);
  const json = await res.json();
  console.log(json)

  json.forEach((ele) => {
    newArr.push({
      userId: Math.floor(Math.random() * 3) + 1,
      name: titleArr[Math.floor(Math.random() * titleArr.length)],
      albumId: Math.floor(Math.random() * 3) + 1,
      imageUrl: ele.urls.regular,
      location: locationsArr[Math.floor(Math.random() * locationsArr.length)],
      content: 'lorem ipsum',
      createdAt: ele.created_at,
      updatedAt: ele.updated_at
    });
    console.log(newArr);
    return newArr;
  })
};

// const locationsArr = ['London', 'Mexico', 'California', 'New Jersey', 'New Mexico', 'Chicago', 'El Salvador', 'Florida', 'Kentucky', 'Spain', 'Costa Rica', 'San Francisco,', 'New York', 'Barcelona', 'Madrid', 'Berlin', 'Rome', 'Paris', 'Kentucky', 'Amsterdam', 'Sweden']

// const test = fetch(randomUrl)
//   .then(response => response.json())
//   .then(json => json.forEach((ele) => {
//     newArr.push({
//       userId: Math.floor(Math.random() * 3) + 1,
//       name: 'Jesus',
//       albumId: Math.floor(Math.random() * 3) + 1,
//       imageUrl: ele.urls.regular,
//       location: locationsArr[Math.floor(Math.random() * locationsArr.length)],
//       content: 'lorem ipsum',
//       createdAt: ele.created_at,
//       updatedAt: ele.updated_at
//     });
//     console.log(newArr);
//     return newArr;
//   }))

console.log(getRandomPhoto()
  .then((res) => res));

// const arr = [];

// const response = getRandomPhoto()
//   .then(res => res.json())
// console.log(response);

// const test = getRandomPhoto();
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

    return queryInterface.bulkInsert('Images', [
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654046491755-20ef230f0add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T21:22:12-04:00',
        updatedAt: '2022-06-01T09:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074175953-280d98ab9984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:05:10-04:00',
        updatedAt: '2022-06-01T09:32:01-04:00'
      },
      {
        userId: 1,
        name: 'This is cool',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654024012309-5c1036372104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:07:45-04:00',
        updatedAt: '2022-06-01T09:30:06-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653934006929-2f3bdb951c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T14:21:39-04:00',
        updatedAt: '2022-06-01T10:35:23-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-04-14T17:48:35-04:00',
        updatedAt: '2022-06-01T08:26:33-04:00'
      },
      {
        userId: 1,
        name: 'Live. Love. Laugh.',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654072876471-ab1018d097e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T04:44:07-04:00',
        updatedAt: '2022-06-01T11:10:59-04:00'
      },
      {
        userId: 2,
        name: 'A sight to see',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T19:25:21-04:00'
      },
      {
        userId: 2,
        name: 'Life is life is life',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654031076986-542e84e32896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:09:08-04:00',
        updatedAt: '2022-06-01T11:24:02-04:00'
      },
      {
        userId: 3,
        name: 'This is cool',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:00:31-04:00',
        updatedAt: '2022-06-01T11:16:01-04:00'
      },
      {
        userId: 2,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026737222-45625f5591ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Berlin',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:57:58-04:00',
        updatedAt: '2022-06-01T11:08:01-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074735583-d6c13be52c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:12:22-04:00',
        updatedAt: '2022-06-01T11:00:03-04:00'
      },
      {
        userId: 3,
        name: 'Live. Love. Laugh.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913659197-46040471de1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T04:24:02-04:00'
      },
      {
        userId: 1,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654032692873-397b35ff22f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:31:43-04:00',
        updatedAt: '2022-06-01T10:56:02-04:00'
      },
      {
        userId: 1,
        name: 'Wowzer',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654027244169-fb492c6f33ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'El Salvador',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:05:52-04:00',
        updatedAt: '2022-06-01T10:48:02-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653917167943-c1ec97050d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T09:40:42-04:00',
        updatedAt: '2022-06-01T10:40:01-04:00'
      },
      {
        userId: 3,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026659889-b4894e41b369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Barcelona',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:51:14-04:00',
        updatedAt: '2022-06-01T10:32:02-04:00'
      },
      {
        userId: 2,
        name: 'Penny for your thoughts',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737964978-597655dd82b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T15:26:07-04:00'
      },
      {
        userId: 2,
        name: 'Welcome to the world',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654025457990-2ac9b07a80d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:31:21-04:00',
        updatedAt: '2022-06-01T10:24:01-04:00'
      },
      {
        userId: 2,
        name: 'A time in peace',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648461513399-95927ce027dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-28T06:04:57-04:00',
        updatedAt: '2022-06-01T10:19:25-04:00'
      },
      {
        userId: 2,
        name: 'The Road Best Traveled',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654022811966-c395c094ac8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:50:22-04:00',
        updatedAt: '2022-06-01T10:16:02-04:00'
      },
      {
        userId: 3,
        name: 'Favorite Adventures',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654022089753-064327fe4b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:35:26-04:00',
        updatedAt: '2022-06-01T10:08:03-04:00'
      },
      {
        userId: 3,
        name: 'Wowzer',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1648737119422-2680a7e39089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T18:25:54-04:00'
      },
      {
        userId: 2,
        name: 'This is cool',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654091805519-d1bd13e57aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T09:59:14-04:00',
        updatedAt: '2022-06-01T10:35:28-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654053175821-e7e7c4b2e743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T23:15:11-04:00',
        updatedAt: '2022-06-01T10:00:03-04:00'
      },
      {
        userId: 3,
        name: 'By the Seaside',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654032390388-eb193af12315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:30:06-04:00',
        updatedAt: '2022-06-01T09:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653764710706-7bd5f7c630ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Florida',
        content: 'lorem ipsum',
        createdAt: '2022-05-28T15:15:54-04:00',
        updatedAt: '2022-06-01T09:48:03-04:00'
      },
      {
        userId: 2,
        name: 'Without a map',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T08:23:49-04:00'
      },
      {
        userId: 3,
        name: 'Life is but a dream',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654046491755-20ef230f0add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T21:22:12-04:00',
        updatedAt: '2022-06-01T09:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074175953-280d98ab9984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:05:10-04:00',
        updatedAt: '2022-06-01T09:32:01-04:00'
      },
      {
        userId: 1,
        name: 'This is cool',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654024012309-5c1036372104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:07:45-04:00',
        updatedAt: '2022-06-01T09:30:06-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653934006929-2f3bdb951c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T14:21:39-04:00',
        updatedAt: '2022-06-01T10:35:23-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-04-14T17:48:35-04:00',
        updatedAt: '2022-06-01T08:26:33-04:00'
      },
      {
        userId: 1,
        name: 'Live. Love. Laugh.',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654072876471-ab1018d097e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T04:44:07-04:00',
        updatedAt: '2022-06-01T11:10:59-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654041961984-81bd6dd7b60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T20:10:43-04:00',
        updatedAt: '2022-06-01T09:00:03-04:00'
      },
      {
        userId: 2,
        name: 'A sight to see',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T19:25:21-04:00'
      },
      {
        userId: 2,
        name: 'Life is life is life',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654031076986-542e84e32896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:09:08-04:00',
        updatedAt: '2022-06-01T11:24:02-04:00'
      },
      {
        userId: 3,
        name: 'This is cool',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:00:31-04:00',
        updatedAt: '2022-06-01T11:16:01-04:00'
      },
      {
        userId: 2,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026737222-45625f5591ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Berlin',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:57:58-04:00',
        updatedAt: '2022-06-01T11:08:01-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074735583-d6c13be52c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:12:22-04:00',
        updatedAt: '2022-06-01T11:00:03-04:00'
      },
      {
        userId: 3,
        name: 'Live. Love. Laugh.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913659197-46040471de1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T04:24:02-04:00'
      },
      {
        userId: 1,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654032692873-397b35ff22f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:31:43-04:00',
        updatedAt: '2022-06-01T10:56:02-04:00'
      },
      {
        userId: 1,
        name: 'Wowzer',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654027244169-fb492c6f33ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'El Salvador',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:05:52-04:00',
        updatedAt: '2022-06-01T10:48:02-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653917167943-c1ec97050d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T09:40:42-04:00',
        updatedAt: '2022-06-01T10:40:01-04:00'
      },
      {
        userId: 3,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026659889-b4894e41b369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Barcelona',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:51:14-04:00',
        updatedAt: '2022-06-01T10:32:02-04:00'
      },
      {
        userId: 2,
        name: 'Penny for your thoughts',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737964978-597655dd82b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T15:26:07-04:00'
      },
      {
        userId: 2,
        name: 'Welcome to the world',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654025457990-2ac9b07a80d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:31:21-04:00',
        updatedAt: '2022-06-01T10:24:01-04:00'
      },
      {
        userId: 2,
        name: 'A time in peace',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648461513399-95927ce027dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-28T06:04:57-04:00',
        updatedAt: '2022-06-01T10:19:25-04:00'
      },
      {
        userId: 2,
        name: 'The Road Best Traveled',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654022811966-c395c094ac8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:50:22-04:00',
        updatedAt: '2022-06-01T10:16:02-04:00'
      },
      {
        userId: 3,
        name: 'Favorite Adventures',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654022089753-064327fe4b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:35:26-04:00',
        updatedAt: '2022-06-01T10:08:03-04:00'
      },
      {
        userId: 3,
        name: 'Wowzer',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1648737119422-2680a7e39089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T18:25:54-04:00'
      },
      {
        userId: 2,
        name: 'This is cool',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654091805519-d1bd13e57aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T09:59:14-04:00',
        updatedAt: '2022-06-01T10:35:28-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654053175821-e7e7c4b2e743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T23:15:11-04:00',
        updatedAt: '2022-06-01T10:00:03-04:00'
      },
      {
        userId: 3,
        name: 'By the Seaside',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654032390388-eb193af12315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:30:06-04:00',
        updatedAt: '2022-06-01T09:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653764710706-7bd5f7c630ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Florida',
        content: 'lorem ipsum',
        createdAt: '2022-05-28T15:15:54-04:00',
        updatedAt: '2022-06-01T09:48:03-04:00'
      },
      {
        userId: 2,
        name: 'Without a map',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T08:23:49-04:00'
      },
      {
        userId: 3,
        name: 'Life is but a dream',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654046491755-20ef230f0add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T21:22:12-04:00',
        updatedAt: '2022-06-01T09:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074175953-280d98ab9984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:05:10-04:00',
        updatedAt: '2022-06-01T09:32:01-04:00'
      },
      {
        userId: 1,
        name: 'This is cool',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654024012309-5c1036372104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:07:45-04:00',
        updatedAt: '2022-06-01T09:30:06-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653934006929-2f3bdb951c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T14:21:39-04:00',
        updatedAt: '2022-06-01T10:35:23-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-04-14T17:48:35-04:00',
        updatedAt: '2022-06-01T08:26:33-04:00'
      },
      {
        userId: 1,
        name: 'Live. Love. Laugh.',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654072876471-ab1018d097e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T04:44:07-04:00',
        updatedAt: '2022-06-01T11:10:59-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654041961984-81bd6dd7b60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T20:10:43-04:00',
        updatedAt: '2022-06-01T09:00:03-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654041562805-e5d7e9657410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Rome',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T20:02:58-04:00',
        updatedAt: '2022-06-01T08:56:01-04:00'
      },
      {
        userId: 2,
        name: 'A sight to see',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T19:25:21-04:00'
      },
      {
        userId: 2,
        name: 'Life is life is life',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654031076986-542e84e32896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:09:08-04:00',
        updatedAt: '2022-06-01T11:24:02-04:00'
      },
      {
        userId: 3,
        name: 'This is cool',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654030752805-a31a2ef93fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:00:31-04:00',
        updatedAt: '2022-06-01T11:16:01-04:00'
      },
      {
        userId: 2,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026737222-45625f5591ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Berlin',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:57:58-04:00',
        updatedAt: '2022-06-01T11:08:01-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074735583-d6c13be52c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:12:22-04:00',
        updatedAt: '2022-06-01T11:00:03-04:00'
      },
      {
        userId: 3,
        name: 'Live. Love. Laugh.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913659197-46040471de1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T04:24:02-04:00'
      },
      {
        userId: 1,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654032692873-397b35ff22f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:31:43-04:00',
        updatedAt: '2022-06-01T10:56:02-04:00'
      },
      {
        userId: 1,
        name: 'Wowzer',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654027244169-fb492c6f33ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'El Salvador',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:05:52-04:00',
        updatedAt: '2022-06-01T10:48:02-04:00'
      },
      {
        userId: 2,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653917167943-c1ec97050d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA5NzA2OQ&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T09:40:42-04:00',
        updatedAt: '2022-06-01T10:40:01-04:00'
      },
      {
        userId: 3,
        name: 'The Road Best Traveled',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654026659889-b4894e41b369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Barcelona',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:51:14-04:00',
        updatedAt: '2022-06-01T10:32:02-04:00'
      },
      {
        userId: 2,
        name: 'Penny for your thoughts',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737964978-597655dd82b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T15:26:07-04:00'
      },
      {
        userId: 2,
        name: 'Welcome to the world',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654025457990-2ac9b07a80d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:31:21-04:00',
        updatedAt: '2022-06-01T10:24:01-04:00'
      },
      {
        userId: 2,
        name: 'A time in peace',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648461513399-95927ce027dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-03-28T06:04:57-04:00',
        updatedAt: '2022-06-01T10:19:25-04:00'
      },
      {
        userId: 2,
        name: 'The Road Best Traveled',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654022811966-c395c094ac8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:50:22-04:00',
        updatedAt: '2022-06-01T10:16:02-04:00'
      },
      {
        userId: 3,
        name: 'Favorite Adventures',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654022089753-064327fe4b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:35:26-04:00',
        updatedAt: '2022-06-01T10:08:03-04:00'
      },
      {
        userId: 3,
        name: 'Wowzer',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1648737119422-2680a7e39089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T18:25:54-04:00'
      },
      {
        userId: 2,
        name: 'This is cool',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654091805519-d1bd13e57aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T09:59:14-04:00',
        updatedAt: '2022-06-01T10:35:28-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654053175821-e7e7c4b2e743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T23:15:11-04:00',
        updatedAt: '2022-06-01T10:00:03-04:00'
      },
      {
        userId: 3,
        name: 'By the Seaside',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654032390388-eb193af12315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Jersey',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T17:30:06-04:00',
        updatedAt: '2022-06-01T09:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Hi',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653764710706-7bd5f7c630ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Florida',
        content: 'lorem ipsum',
        createdAt: '2022-05-28T15:15:54-04:00',
        updatedAt: '2022-06-01T09:48:03-04:00'
      },
      {
        userId: 2,
        name: 'Without a map',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-06-01T08:23:49-04:00'
      },
      {
        userId: 3,
        name: 'Life is but a dream',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654046491755-20ef230f0add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Sweden',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T21:22:12-04:00',
        updatedAt: '2022-06-01T09:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Hi',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654074175953-280d98ab9984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T05:05:10-04:00',
        updatedAt: '2022-06-01T09:32:01-04:00'
      },
      {
        userId: 1,
        name: 'This is cool',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654024012309-5c1036372104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T15:07:45-04:00',
        updatedAt: '2022-06-01T09:30:06-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653934006929-2f3bdb951c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T14:21:39-04:00',
        updatedAt: '2022-06-01T10:35:23-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1649972904914-5d5aaf3d1793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-04-14T17:48:35-04:00',
        updatedAt: '2022-06-01T08:26:33-04:00'
      },
      {
        userId: 1,
        name: 'Live. Love. Laugh.',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654072876471-ab1018d097e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Amsterdam',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T04:44:07-04:00',
        updatedAt: '2022-06-01T11:10:59-04:00'
      },
      {
        userId: 1,
        name: 'By the Seaside',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654041961984-81bd6dd7b60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T20:10:43-04:00',
        updatedAt: '2022-06-01T09:00:03-04:00'
      },
      {
        userId: 1,
        name: 'Life is 10% what happens to you and 90% how you react to it.',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654041562805-e5d7e9657410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Rome',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T20:02:58-04:00',
        updatedAt: '2022-06-01T08:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Life is life is life',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654072936069-68c1890f3da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTQwOTcwNjk&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Rome',
        content: 'lorem ipsum',
        createdAt: '2022-06-01T04:46:01-04:00',
        updatedAt: '2022-06-01T08:48:01-04:00'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
