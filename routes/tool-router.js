const ToolController = require('../controllers/tool-controller')

const setRoutes = (router) => {
    router.post('/tools', ToolController.createTool)
    router.put('/tools/:id', ToolController.updateTool)
    router.delete('/tools/:id', ToolController.deleteTool)
    router.get('/tools/:id', ToolController.getToolById)
    router.get('/tools', ToolController.getTools)
}

module.exports = {
    setRoutes
}