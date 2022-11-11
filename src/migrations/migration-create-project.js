'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('projects', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            managerId: {
                type: Sequelize.INTEGER
            },
            projectName: {
                type: Sequelize.STRING
            },
            clientName: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            startDay: {
                type: Sequelize.DATE
            },
            endDay: {
                type: Sequelize.DATE
            },
            turnover: {
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
        await queryInterface.dropTable('projects');
    }
};