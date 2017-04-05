'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    status: { type: DataTypes.BOOLEAN, defaultValue: 'TRUE' },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.Todo);
        //Task.hasMany(models.Doc);
      }
    }
  });
  return Task;
};