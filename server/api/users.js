const router = require('express').Router()
const {User, Client} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{model: Client}]
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
    })
    console.log(users)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async function(req, res, next) {
  try {
    const singleUser = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.send(singleUser)
  } catch (error) {
    console.error(error)
  }
})

// /api/users/${id}/clients

router.get('/:id/clients', async function(req, res, next) {
  try {
    const clients = await User.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Client
      }
    })
    res.send(clients)
  } catch (error) {
    console.error(error)
  }
})
