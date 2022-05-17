'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    // Comment.belongsTo(models.Image, {
    //   foreignKey: 'photoId',
    //   onDelete: 'CASCADE',
    //   hooks: true,
    // });

  };
  return Comment;
};
