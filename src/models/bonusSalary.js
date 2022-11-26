'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BonusSalary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    BonusSalary.init({
        staffId: DataTypes.INTEGER,
        month: DataTypes.STRING,
        reason: DataTypes.TEXT,
        salary: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'BonusSalary',
    });
    return BonusSalary;
};