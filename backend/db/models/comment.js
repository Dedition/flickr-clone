'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Comment.belongsTo(models.Image, {
      foreignKey: 'imageId',
      onDelete: 'CASCADE',
      hooks: true
    });

  };
  return Comment;
};
