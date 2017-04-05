'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: { allowNull: false, type: DataTypes.STRING },
    tags: DataTypes.STRING,
    status: { type: DataTypes.BOOLEAN, defaultValue: 'TRUE' },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User);
        Todo.hasMany(models.Task);
        Todo.belongsTo(models.Category);
      }
    }
  });
  return Todo;
};