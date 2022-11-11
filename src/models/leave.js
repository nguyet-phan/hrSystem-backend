'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Leave extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Leave.init({
        statusId: DataTypes.STRING,
        managerId: DataTypes.INTEGER,
        staffId: DataTypes.INTEGER,
        startDay: DataTypes.DATE,
        quantityDay: DataTypes.FLOAT,
        reason: DataTypes.STRING,
        reasonRefuse: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Leave',
    });
    return Leave;
};