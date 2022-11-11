'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('events', {
            // eventName: DataTypes.STRING,
            // description: DataTypes.TEXT,
            // startDay: DataTypes.DATE,
            // endDay: DataTypes.DATE,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            eventName: {
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
        await queryInterface.dropTable('events');
    }
};