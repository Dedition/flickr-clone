'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Comment.belongsTo(models.Photo, {
      foreignKey: 'photoId',
      onDelete: 'CASCADE',
      hooks: true,
    });

  };
  return comment;
};
