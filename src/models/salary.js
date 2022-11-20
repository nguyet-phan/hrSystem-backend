'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Salary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Salary.belongsTo(models.User, { foreignKey: 'staffId' })
        }
    };
    Salary.init({
        staffId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        basicSalaries: DataTypes.FLOAT,
        projectSalaries: DataTypes.FLOAT,
        bonusSalaries: DataTypes.FLOAT,
        overtimeSalaries: DataTypes.FLOAT,
        onsiteSalaries: DataTypes.FLOAT,
        deductionSalaries: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'Salary',
    });
    return Salary;
};