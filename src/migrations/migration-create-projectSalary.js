'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ProjectSalaries', {

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
            projectName: {
                type: Sequelize.TEXT
            },
            salary: {
                allowNull: false,
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('ProjectSalaries');
    }
};