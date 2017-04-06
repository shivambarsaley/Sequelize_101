'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Work',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 2,
        name: 'Personal',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        id: 3,
        name: 'Reads',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
