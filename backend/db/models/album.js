'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Album.hasMany(models.Image, {
      foreignKey: 'albumId',
      as: 'images',
      onDelete: 'CASCADE',
      hooks: true
    });

  };
  return album;
};
