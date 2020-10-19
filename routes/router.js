const personRouter = require('./person-router.js')
const animalRouter = require('./animal-router.js')

const express = require('express')
const router = express.Router()

personRouter.setRoutes(router)
animalRouter.setRoutes(router)

module.exports = router