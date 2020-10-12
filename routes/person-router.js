const express = require('express')

const PersonController = require('../controllers/person-controller')

const router = express.Router()

router.post('/movie', PersonController.createPerson)
router.put('/movie/:id', PersonController.updatePerson)
router.delete('/movie/:id', PersonController.deletePerson)
router.get('/movie/:id', PersonController.getPersonById)
router.get('/movies', PersonController.getPeople)

module.exports = router