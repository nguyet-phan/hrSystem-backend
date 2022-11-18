'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DeductionSalary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    DeductionSalary.init({
        staffId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        quantity: DataTypes.FLOAT,

    }, {
        sequelize,
        modelName: 'DeductionSalary',
    });
    return DeductionSalary;
};