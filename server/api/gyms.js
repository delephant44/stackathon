const router = require('express').Router()
const {Gym} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allGyms = await Gym.findAll({})
    res.json(allGyms)
  } catch (err) {
    next(err)
  }
})
