'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProjectSalary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    ProjectSalary.init({
        staffId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        projectName: DataTypes.TEXT,
        salary: DataTypes.FLOAT,

    }, {
        sequelize,
        modelName: 'ProjectSalary',
    });
    return ProjectSalary;
};