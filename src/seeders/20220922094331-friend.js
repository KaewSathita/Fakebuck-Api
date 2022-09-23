'use strict';

const { FRIEND_ACCEPTED } = require('../config/constants')

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
// 28,29,30,31,32
    return queryInterface.bulkInsert('friends', [
      {
        status: FRIEND_ACCEPTED,
        created_at:new Date(),
        updated_at: new Date(),
        requester_id: 28,
        accepter_id:29
      },
      {
        status: FRIEND_ACCEPTED,
        created_at:new Date(),
        updated_at: new Date(),
        requester_id: 29,
        accepter_id: 30
      },
      {
        status: FRIEND_ACCEPTED,
        created_at:new Date(),
        updated_at: new Date(),
        requester_id: 30,
        accepter_id: 31
      },
      {
        status: FRIEND_ACCEPTED,
        created_at:new Date(),
        updated_at: new Date(),
        requester_id: 31,
        accepter_id: 32
      },
      {
        status: FRIEND_ACCEPTED,
        created_at:new Date(),
        updated_at: new Date(),
        requester_id: 32,
        accepter_id: 28
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('friends', null, {})
  }
};
