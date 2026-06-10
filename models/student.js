'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
    timestamps: false
  });
  return student;
};