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
      room_name: {
        type: Sequelize.STRING
      },
      total_room: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      check_in: {
        type: Sequelize.DATEONLY
      },
      check_out: {
        type: Sequelize.DATEONLY
      },
      expired_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      hotels_rooms_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hotels_rooms',
          key: 'id'
        }
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};