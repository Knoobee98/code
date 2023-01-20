'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      travel_name: {
        type: Sequelize.STRING
      },
      total_seat: {
        type: Sequelize.INTEGER
      },
      seat_number: {
        type: Sequelize.STRING
      },
      total_prices: {
        type: Sequelize.INTEGER
      },
      // user_id: {
      //   type: Sequelize.UUID,
      //   allowNull: false,
      //   references: {
      //     model: 'users',
      //     key: 'id'
      //   }
      // },
      // seats_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'seats',
      //     key: 'id'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};