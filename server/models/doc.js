'use strict';
module.exports = function(sequelize, DataTypes) {
  var Doc = sequelize.define('Doc', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Doc;
};