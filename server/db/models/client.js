const Sequelize = require('sequelize')
const db = require('../db')

const Client = db.define('client', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  goals: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Client
