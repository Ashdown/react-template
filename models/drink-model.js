const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Drink = new Schema(
    {
        name: {type: String, required: true},
        volume: {type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('drinks', Drink)