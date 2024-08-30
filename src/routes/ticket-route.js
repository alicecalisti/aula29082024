const express = require('express')
const route = express.Router()
const controller  = require('../controllers/ticket-controller')

route.get('/', controller.get)
//route.get('/:id', controller.getById)
route.post('/',controller.post)
route.put('/:id', controller.put)



module.exports = route;