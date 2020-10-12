const express = require('express')

const PersonController = require('../controllers/person-controller')

const router = express.Router()

router.post('/people', PersonController.createPerson)
router.put('/people/:id', PersonController.updatePerson)
router.delete('/people/:id', PersonController.deletePerson)
router.get('/people/:id', PersonController.getPersonById)
router.get('/people', PersonController.getPeople)

module.exports = router