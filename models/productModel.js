const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: true,
        min: 0
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);