'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        unique: 1,
        allowNull: false
      },
      played: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      wins: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      singleCage: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      doubleCage: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      tripleCage: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      quadroCage: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      }
    });

    await queryInterface.addConstraint('stats', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'user_references',
        references: {table: 'users', field: 'id'},
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};