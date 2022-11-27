'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OnsiteSalary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    OnsiteSalary.init({
        staffId: DataTypes.INTEGER,
        month: DataTypes.STRING,
        place: DataTypes.TEXT,
        startDay: DataTypes.DATE,
        endDay: DataTypes.DATE,
        statusId: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'OnsiteSalary',
    });
    return OnsiteSalary;
};