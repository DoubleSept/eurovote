'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Vote = require('./vote')(sequelize, DataTypes)

  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.hasMany(models.Vote)
    }
  };
  Artist.init({
    order: DataTypes.INTEGER,
    name: DataTypes.STRING,
    song: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  
  return Artist;
};