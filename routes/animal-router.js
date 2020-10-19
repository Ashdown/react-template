const AnimalController = require('../controllers/animal-controller')

const setRoutes = (router) => {
    router.post('/animals', AnimalController.createAnimal)
    router.put('/animals/:id', AnimalController.updateAnimal)
    router.delete('/animals/:id', AnimalController.deleteAnimal)
    router.get('/animals/:id', AnimalController.getAnimalById)
    router.get('/animals', AnimalController.getAnimals)
}

module.exports = {
    setRoutes
}
