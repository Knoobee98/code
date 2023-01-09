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
      hotel_name: {
        type: Sequelize.STRING
      },
      hotel_location: {
        type: Sequelize.STRING
      },
      room_price: {
        type: Sequelize.INTEGER
      },
      room_name: {
        type: Sequelize.STRING
      },
      total_room: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      checkIn: {
        type: Sequelize.DATEONLY
      },
      checkOut: {
        type: Sequelize.DATEONLY
      },
      expired_date: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.DATEONLY
      },
      hotels_rooms_id: {
        type: Sequelize.INTEGER,
      },
      users_id: {
        type: Sequelize.UUID,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultVAlue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};