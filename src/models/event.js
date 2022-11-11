'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Event.init({
        eventName: DataTypes.STRING,
        description: DataTypes.TEXT,
        startDay: DataTypes.DATE,
        endDay: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Event',
    });
    return Event;
};