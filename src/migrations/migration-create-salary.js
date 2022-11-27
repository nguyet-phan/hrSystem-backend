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
                allowNull: false,
                type: Sequelize.INTEGER
            },

            month: {
                allowNull: false,
                type: Sequelize.STRING
            },
            basicSalaries: {
                type: Sequelize.FLOAT
            },
            projectSalaries: {
                type: Sequelize.FLOAT
            },
            bonusSalaries: {
                type: Sequelize.FLOAT
            },
            projectSalaries: {
                type: Sequelize.FLOAT
            },
            overtimeSalaries: {
                type: Sequelize.FLOAT
            },
            onsiteSalaries: {
                type: Sequelize.FLOAT
            },
            deductionSalaries: {
                type: Sequelize.FLOAT
            },
            statusId: {
                defaultValue: 'S1',
                type: Sequelize.STRING
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