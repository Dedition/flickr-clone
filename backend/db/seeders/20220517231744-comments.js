'use strict';

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
      id: 1,
      userId: 1,
      imageId: 1,
      content: 'comment1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      userId: 1,
      imageId: 1,
      content: 'comment2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      userId: 1,
      imageId: 1,
      content: 'comment3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
