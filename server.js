const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json())

const port = process.env.PORT || 4000

connectDB()

app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
})