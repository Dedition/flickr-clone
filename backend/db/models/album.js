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
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });

    Album.belongsTo(models.Image, {
      foreignKey: 'imageId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Album;
};
