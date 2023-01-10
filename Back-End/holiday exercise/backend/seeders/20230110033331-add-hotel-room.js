"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "hotels_rooms",
      [
        {
          name: "Superior Single",
          price: 0,
          total_room: 0,
          hotels_id: 0,
        },
        {
          name: "Superior Double",
          price: 0,
          total_room: 0,
          hotels_id: 0,
        },
        {
          name: "Deluxe",
          price: 0,
          total_room: 0,
          hotels_id: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
