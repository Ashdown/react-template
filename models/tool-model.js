const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tool = new Schema(
    {
        name: {type: String, required: true},
        points: {type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('tools', Tool)