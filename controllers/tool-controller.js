const Tool = require('../models/tool-model')

createTool = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an tool',
        })
    }

    const tool = new Tool(body)

    if (!tool) {
        return res.status(400).json({ success: false, error: err })
    }

    tool
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                _id: tool._id,
                message: 'Tool created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tool not created!',
            })
        })
}

updateTool = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Tool.findOne({ _id: req.params.id }, (err, tool) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tool not found!',
            })
        }
        tool.name = body.name
        tool.time = body.time
        tool.rating = body.rating
        tool
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tool._id,
                    message: 'Tool updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Tool not updated!',
                })
            })
    })
}

deleteTool = async (req, res) => {
    await Tool.findOneAndDelete({ _id: req.params.id }, (err, tool) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tool) {
            return res
                .status(404)
                .json({ success: false, error: `Tool not found` })
        }

        return res.status(200).json({ success: true, data: tool })
    }).catch(err => console.log(err))
}

getToolById = async (req, res) => {
    await Tool.findOne({ _id: req.params.id }, (err, tool) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tool) {
            return res
                .status(404)
                .json({ success: false, error: `Tool not found` })
        }
        return res.status(200).json({ success: true, data: tool })
    }).catch(err => console.log(err))
}

getTools = async (req, res) => {
    await Tool.find({}, (err, tools) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tools.length) {
            return res
                .status(404)
                .json({ success: false, error: `tools not found` })
        }
        return res.status(200).json({ success: true, data: tools })
    }).catch(err => console.log(err))
}

module.exports = {
    createTool,
    updateTool,
    deleteTool,
    getTools,
    getToolById,
}