const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const authProtected = async function (req,res,next) {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'token not provided'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = authProtected;