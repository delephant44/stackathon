const Sequelize = require('sequelize')
const db = require('../db')

const Gym = db.define('gym', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Gym
