'use strict';
const { randomUrl } = require('../unsplashAPI/unsplash');
const fetch = require('node-fetch');
const newArr = [];

// async function getRandomPhoto() {
//   const locationsArr = ['London', 'Mexico', 'California', 'New Jersey', 'New Mexico', 'Chicago', 'El Salvador', 'Florida', 'Kentucky', 'Spain', 'Costa Rica', 'San Francisco,', 'New York', 'Barcelona', 'Madrid', 'Berlin', 'Rome', 'Paris', 'Kentucky', 'Amsterdam', 'Sweden']
//   const res = await fetch(randomUrl);
//   const json = await res.json();

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
//   }))

// console.log(getRandomPhoto()
//   .then((res) => res));

// const arr = [];

// const response = getRandomPhoto()
//   .then(res => res.json())
// console.log(response);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const test = await getRandomPhoto();
    return queryInterface.bulkInsert('Images',
      test
      , {});
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
