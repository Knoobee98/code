const { UUIDV4 } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('transactions', 'users_id', { 
      type: Sequelize.UUID,
      defaultValue: UUIDV4,
      references: {
        model: 'users',
        key: 'id'
      }
    })

    // await queryInterface.addColumn('transactions', 'hotels_rooms_id', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'hotels_rooms',
    //     key: 'id'
    //   }
    // })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('transactions', 'users_id')

  }
};
