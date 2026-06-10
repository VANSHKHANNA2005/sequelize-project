'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'VANSH KHANNA',
        email: 'vansh@gmail.com',
        student_id: 1,
      },
      {
        name: 'DISHA SHARMA',
        email: 'disha@gmail.com',
        student_id: 2,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
