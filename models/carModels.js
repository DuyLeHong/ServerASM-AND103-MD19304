const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    gia: {
        type: Number,
    },
    hang: {
        type: String,
    },
    namSX: {
        type: Number,
    },
    anh: {
        type: String,
    },

})

const CarModel = new mongoose.model('car', CarSchema)

module.exports = CarModel