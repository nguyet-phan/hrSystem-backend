'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('OnsiteSalaries', {

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
            place: {
                type: Sequelize.TEXT
            },
            startDay: {
                allowNull: false,
                type: Sequelize.DATE
            },
            endDay: {
                allowNull: false,
                type: Sequelize.DATE
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
        await queryInterface.dropTable('OnsiteSalaries');
    }
};