'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('salaries', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            staffId: {
                type: Sequelize.INTEGER
            },
            basicSalary: {
                type: Sequelize.INTEGER
            },
            projectSalary: {
                type: Sequelize.INTEGER
            },
            bonusSalary: {
                type: Sequelize.INTEGER
            },
            deductionSalary: {
                type: Sequelize.INTEGER
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('salaries');
    }
};