const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Animal = new Schema(
    {
        name: {type: String, required: true},
        legs: {type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('animals', Animal)