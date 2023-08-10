'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempegowda Internatinal Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Mysuru Internatinal Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Mangaluru Internatinal Airport',
        cityId:13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Indira Gandhi Internatinal Airport',
        cityId:8,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
