'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return queryInterface.addColumn('Todos', 'endDate',
      {
        type: Sequelize.DATE,
        allowNull: true,
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    
    return queryInterface.removeColumn('Todos', 'endDate');
  }
};
