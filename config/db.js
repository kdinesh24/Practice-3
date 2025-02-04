const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('MONGODB is connected');
    } catch (error) {
        cconsole.log('Failed connecting MONGODB');
        process.exit(1)
    }
}

module.exports = connectDB