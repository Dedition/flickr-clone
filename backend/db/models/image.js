'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    Image.hasMany(models.Comment, {
      foreignKey: 'imageId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Image.hasMany(models.Album, {
      foreignKey: 'imageId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Image;
};
