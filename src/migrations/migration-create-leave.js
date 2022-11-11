'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('leaves', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            statusId: {
                type: Sequelize.STRING
            },
            managerId: {
                type: Sequelize.INTEGER
            },
            staffId: {
                type: Sequelize.INTEGER
            },
            startDay: {
                type: Sequelize.DATE
            },
            quantityDay: {
                type: Sequelize.FLOAT
            },
            reason: {
                type: Sequelize.STRING
            },
            reasonRefuse: {
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
        await queryInterface.dropTable('leaves');
    }
};