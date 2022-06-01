'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    Album.belongsTo(models.Image, {
      foreignKey: 'imageId'
    });

    Album.hasMany(models.Image, {
      foreignKey: 'albumId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Album;
};
