const personRouter = require('./person-router.js')
const animalRouter = require('./animal-router.js')
const toolsRouter = require('./tool-router.js')

const express = require('express')
const router = express.Router()

personRouter.setRoutes(router)
animalRouter.setRoutes(router)
toolsRouter.setRoutes(router)

module.exports = router