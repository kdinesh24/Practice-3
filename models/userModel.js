const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phoneNo: {
        type: Number
    },
    avatar: {
        type: String,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);