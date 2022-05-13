const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.SECRET
const UserModel = require('../models/user.model')

exports.list = async (req, res)=>{
    try {
        const userDetails = await UserModel.findAll()
        return res.status(200).send(userDetails)
    } catch (error) {
        return res.status(500).send({message: "Something went wrong"})
    }
}
