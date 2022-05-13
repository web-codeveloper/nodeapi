const jwt = require('jsonwebtoken')
const jwtSecret = process.env.secret
const decryptJWT = require('../helpers/jwt.encryption').decryptJWT

module.exports = async (req, res, next) => {
  const token = req.headers.token
  if (!token) 
    return res.status(400).send({ data:{success:false, message:"No Token Provided"}, errorNode:{errorCode:1, errorMsg:"No Token Provided"}})
  try {
    const newToken = decryptJWT(token)
    const data = jwt.verify(newToken, jwtSecret)
    req.user = data
    next()
  } catch (err) {
    return res.status(400).send({ data:{success:false, message:"Invalid Token"}, errorNode:{errorCode:1, errorMsg:"Invalid Token"}})
  }
}