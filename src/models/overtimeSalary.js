'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OvertimeSalary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    OvertimeSalary.init({
        staffId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        hour: DataTypes.FLOAT,
        status: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'OvertimeSalary',
    });
    return OvertimeSalary;
};