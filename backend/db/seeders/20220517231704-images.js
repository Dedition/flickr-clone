'use strict';
// const { randomUrl } = require('../unsplashAPI/unsplash');
// const fetch = require('node-fetch');
// const newArr = [];

// async function getRandomPhoto() {
//   const locationsArr = ['London', 'Mexico', 'California', 'New Jersey', 'New Mexico', 'Chicago', 'El Salvador', 'Florida', 'Kentucky', 'Spain', 'Costa Rica', 'San Francisco,', 'New York', 'Barcelona', 'Madrid', 'Berlin', 'Rome', 'Paris', 'Kentucky', 'Amsterdam', 'Sweden']
//   const res = await fetch(randomUrl);
//   const json = await res.json();
//   console.log(json)

//   json.forEach((ele) => {
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
//   })
// };

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

// console.log(getRandomPhoto()
//   .then((res) => res));

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
        imageUrl: 'https://images.unsplash.com/photo-1653954727853-e54b2ef8986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:56:37-04:00',
        updatedAt: '2022-05-31T20:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653952049037-3a6003c02285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:07:53-04:00',
        updatedAt: '2022-05-31T20:32:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653651460706-987af3f8eb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-27T07:53:51-04:00',
        updatedAt: '2022-05-31T21:30:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119359-510d4f551382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T17:25:43-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654008336992-67bfabd11916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:46:10-04:00',
        updatedAt: '2022-05-31T22:30:09-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T14:25:33-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654027533986-9252ac069794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:07:00-04:00',
        updatedAt: '2022-05-31T23:30:09-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653938245846-51df639ee1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T15:22:55-04:00',
        updatedAt: '2022-05-31T22:40:01-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653923138014-6fef26b225e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T11:12:38-04:00',
        updatedAt: '2022-05-31T22:32:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653972359337-ae2d4a202b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T00:46:03-04:00',
        updatedAt: '2022-05-31T22:24:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'California',
        content: 'lorem ipsum',
        createdAt: '2021-05-21T11:13:48-04:00',
        updatedAt: '2022-05-31T11:19:16-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654028132164-a2ff2d88ea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:16:09-04:00',
        updatedAt: '2022-05-31T22:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654028557808-54a370f554dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:23:20-04:00',
        updatedAt: '2022-05-31T22:08:03-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654023451875-223085c35eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:58:32-04:00',
        updatedAt: '2022-05-31T22:00:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653866111166-a74d722fa6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T08:00:32-04:00',
        updatedAt: '2022-05-31T21:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662295-9630035ef770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-05-31T01:23:44-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654029074804-6cc9378c0d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:31:28-04:00',
        updatedAt: '2022-05-31T21:48:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654017862897-9228568500d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T13:27:12-04:00',
        updatedAt: '2022-05-31T21:40:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:06:27-04:00',
        updatedAt: '2022-05-31T21:32:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654002519404-0cf069bce6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:09:02-04:00',
        updatedAt: '2022-05-31T21:30:07-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737966174-c5ef7b893fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T10:24:42-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654003256307-0665261fdbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:23:21-04:00',
        updatedAt: '2022-05-31T21:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:07:48-04:00',
        updatedAt: '2022-05-31T21:08:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654006606371-0dfd562f42de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:20:51-04:00',
        updatedAt: '2022-05-31T21:00:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654007970795-6420691906b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:42:05-04:00',
        updatedAt: '2022-05-31T20:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2018-04-26T12:07:35-04:00',
        updatedAt: '2022-05-31T09:41:31-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653953547304-9f434ab5cd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:52:05-04:00',
        updatedAt: '2022-05-31T20:48:02-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653954727853-e54b2ef8986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:56:37-04:00',
        updatedAt: '2022-05-31T20:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653952049037-3a6003c02285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:07:53-04:00',
        updatedAt: '2022-05-31T20:32:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653651460706-987af3f8eb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-27T07:53:51-04:00',
        updatedAt: '2022-05-31T21:30:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119359-510d4f551382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T17:25:43-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654008336992-67bfabd11916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:46:10-04:00',
        updatedAt: '2022-05-31T22:30:09-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654007403374-2393aa56c678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:30:14-04:00',
        updatedAt: '2022-05-31T20:08:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T14:25:33-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654027533986-9252ac069794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:07:00-04:00',
        updatedAt: '2022-05-31T23:30:09-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653938245846-51df639ee1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T15:22:55-04:00',
        updatedAt: '2022-05-31T22:40:01-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653923138014-6fef26b225e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T11:12:38-04:00',
        updatedAt: '2022-05-31T22:32:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653972359337-ae2d4a202b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T00:46:03-04:00',
        updatedAt: '2022-05-31T22:24:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'California',
        content: 'lorem ipsum',
        createdAt: '2021-05-21T11:13:48-04:00',
        updatedAt: '2022-05-31T11:19:16-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654028132164-a2ff2d88ea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:16:09-04:00',
        updatedAt: '2022-05-31T22:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654028557808-54a370f554dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:23:20-04:00',
        updatedAt: '2022-05-31T22:08:03-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654023451875-223085c35eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:58:32-04:00',
        updatedAt: '2022-05-31T22:00:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653866111166-a74d722fa6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T08:00:32-04:00',
        updatedAt: '2022-05-31T21:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662295-9630035ef770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-05-31T01:23:44-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654029074804-6cc9378c0d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:31:28-04:00',
        updatedAt: '2022-05-31T21:48:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654017862897-9228568500d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T13:27:12-04:00',
        updatedAt: '2022-05-31T21:40:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:06:27-04:00',
        updatedAt: '2022-05-31T21:32:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654002519404-0cf069bce6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:09:02-04:00',
        updatedAt: '2022-05-31T21:30:07-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737966174-c5ef7b893fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T10:24:42-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654003256307-0665261fdbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:23:21-04:00',
        updatedAt: '2022-05-31T21:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:07:48-04:00',
        updatedAt: '2022-05-31T21:08:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654006606371-0dfd562f42de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:20:51-04:00',
        updatedAt: '2022-05-31T21:00:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654007970795-6420691906b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:42:05-04:00',
        updatedAt: '2022-05-31T20:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2018-04-26T12:07:35-04:00',
        updatedAt: '2022-05-31T09:41:31-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653953547304-9f434ab5cd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:52:05-04:00',
        updatedAt: '2022-05-31T20:48:02-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653954727853-e54b2ef8986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:56:37-04:00',
        updatedAt: '2022-05-31T20:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653952049037-3a6003c02285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:07:53-04:00',
        updatedAt: '2022-05-31T20:32:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653651460706-987af3f8eb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-27T07:53:51-04:00',
        updatedAt: '2022-05-31T21:30:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119359-510d4f551382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T17:25:43-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654008336992-67bfabd11916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:46:10-04:00',
        updatedAt: '2022-05-31T22:30:09-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654007403374-2393aa56c678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:30:14-04:00',
        updatedAt: '2022-05-31T20:08:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653917189526-71eebe91564f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T09:40:43-04:00',
        updatedAt: '2022-05-31T20:00:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119247-e93f56878edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T14:25:33-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654027533986-9252ac069794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:07:00-04:00',
        updatedAt: '2022-05-31T23:30:09-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653938245846-51df639ee1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T15:22:55-04:00',
        updatedAt: '2022-05-31T22:40:01-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653923138014-6fef26b225e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T11:12:38-04:00',
        updatedAt: '2022-05-31T22:32:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1653972359337-ae2d4a202b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T00:46:03-04:00',
        updatedAt: '2022-05-31T22:24:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'California',
        content: 'lorem ipsum',
        createdAt: '2021-05-21T11:13:48-04:00',
        updatedAt: '2022-05-31T11:19:16-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654028132164-a2ff2d88ea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:16:09-04:00',
        updatedAt: '2022-05-31T22:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654028557808-54a370f554dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:23:20-04:00',
        updatedAt: '2022-05-31T22:08:03-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654023451875-223085c35eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY1NDA1NDI3OA&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T14:58:32-04:00',
        updatedAt: '2022-05-31T22:00:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653866111166-a74d722fa6ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T08:00:32-04:00',
        updatedAt: '2022-05-31T21:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1638913662295-9630035ef770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2021-12-07T16:50:16-05:00',
        updatedAt: '2022-05-31T01:23:44-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654029074804-6cc9378c0d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T16:31:28-04:00',
        updatedAt: '2022-05-31T21:48:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654017862897-9228568500d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T13:27:12-04:00',
        updatedAt: '2022-05-31T21:40:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:06:27-04:00',
        updatedAt: '2022-05-31T21:32:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1654002519404-0cf069bce6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:09:02-04:00',
        updatedAt: '2022-05-31T21:30:07-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1648737966174-c5ef7b893fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New York',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:47:51-04:00',
        updatedAt: '2022-05-31T10:24:42-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654003256307-0665261fdbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T09:23:21-04:00',
        updatedAt: '2022-05-31T21:16:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:07:48-04:00',
        updatedAt: '2022-05-31T21:08:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654006606371-0dfd562f42de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwxOXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:20:51-04:00',
        updatedAt: '2022-05-31T21:00:01-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654007970795-6420691906b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:42:05-04:00',
        updatedAt: '2022-05-31T20:56:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyMXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Spain',
        content: 'lorem ipsum',
        createdAt: '2018-04-26T12:07:35-04:00',
        updatedAt: '2022-05-31T09:41:31-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1653953547304-9f434ab5cd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyMnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:52:05-04:00',
        updatedAt: '2022-05-31T20:48:02-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653954727853-e54b2ef8986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyM3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Madrid',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:56:37-04:00',
        updatedAt: '2022-05-31T20:40:02-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653952049037-3a6003c02285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Chicago',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T19:07:53-04:00',
        updatedAt: '2022-05-31T20:32:01-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653651460706-987af3f8eb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyNXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'San Francisco,',
        content: 'lorem ipsum',
        createdAt: '2022-05-27T07:53:51-04:00',
        updatedAt: '2022-05-31T21:30:03-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1648737119359-510d4f551382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MXwxfGFsbHwyNnx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-03-31T10:33:43-04:00',
        updatedAt: '2022-05-31T17:25:43-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654008336992-67bfabd11916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyN3x8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'London',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:46:10-04:00',
        updatedAt: '2022-05-31T22:30:09-04:00'
      },
      {
        userId: 1,
        name: 'Jesus',
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1654007403374-2393aa56c678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'New Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T10:30:14-04:00',
        updatedAt: '2022-05-31T20:08:02-04:00'
      },
      {
        userId: 2,
        name: 'Jesus',
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1653917189526-71eebe91564f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwyOXx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Mexico',
        content: 'lorem ipsum',
        createdAt: '2022-05-30T09:40:43-04:00',
        updatedAt: '2022-05-31T20:00:03-04:00'
      },
      {
        userId: 3,
        name: 'Jesus',
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1654009603731-20b6d7536002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzI0ODV8MHwxfGFsbHwzMHx8fHx8fDJ8fDE2NTQwNTQyNzg&ixlib=rb-1.2.1&q=80&w=1080',
        location: 'Kentucky',
        content: 'lorem ipsum',
        createdAt: '2022-05-31T11:06:47-04:00',
        updatedAt: '2022-05-31T19:56:01-04:00'
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
