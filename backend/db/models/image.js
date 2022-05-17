'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Image.associate = function (models) {
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
  return Image;
};
