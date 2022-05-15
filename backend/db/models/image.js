'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Image.belongsTo(models.Album, {
      foreignKey: 'albumId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  };
  return image;
};
