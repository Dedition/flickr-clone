'use strict';
const commentsData = require('../../assets/comments.json');

const newComments = [];

commentsData.forEach(comment => {
  newComments.push({
    userId: Math.floor(Math.random() * 3) + 1,
    imageId: Math.floor(Math.random() * 93) + 1,
    content: comment.content
  });
});

// console.log(newComments);
// const newComments = commentsData.map(comment => ({
//   userId: Math.floor(Math.random() * 3) + 1,
//   imageId: Math.floor(Math.random() * 99) + 1,
//   content: comment.content
// }));

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Comments', [{
      userId: 1,
      imageId: 1,
      content: 'comment1',
    }, {
      userId: 1,
      imageId: 1,
      content: 'comment2',
    }, {
      userId: 1,
      imageId: 1,
      content: 'comment3',
    },
    ...newComments], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
