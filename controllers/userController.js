const { cloudinary } = require('../config/cloudinaryConfig')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.status(400).send("User Already Exists!")
        }
        let file = req.file
        if(!file){
            return res.status(400).send({message:"file missing"})
        }
        const cloudnaryresult = cloudinary.uploader.upload(file.path)

        if(!cloudnaryresult){
            return res.status(400).send({message:"Kindly upload your pic"})
        }

        const avatarURL = cloudnaryresult.secqure_url;

        const hash = bcrypt.hashSync(password, 10);

        const newUser = new User ({
            name,
            email,
            password: hash,
            avatar:avatarURL
        })

        await newUser.save()

        return res.status(201).send("Profile Created successfully....")

    } catch (err) {
        res.status(500).send("Internal Server Error", err.message)
    }
}

module.exports = signup