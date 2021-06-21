'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order,{
        foreignKey:'idUser'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    last_name1: DataTypes.STRING,
    last_name2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    shipping_address: DataTypes.STRING,
    billing_address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    dni: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};