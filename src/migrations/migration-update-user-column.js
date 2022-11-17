module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Users',
                'birthday',
                {
                    type: Sequelize.DATE
                }
            ),
            queryInterface.addColumn(
                'Users',
                'personId',
                {
                    type: Sequelize.STRING
                }
            ),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Users', 'birthday'),
            queryInterface.removeColumn('Users', 'personId')
        ]);
    }
};
