const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET;
const UserModel = require("../models/user.model");

exports.signup = async (req, res) => {
  try {
    const { name, emailId, password } = req.body;

    if (name && emailId && password) {
      const hashPassword = bcrypt.hashSync(password, 10);
      await UserModel.create({
        name: name,
        emailId: emailId,
        password: hashPassword,
      });
      return res.status(201).send({ message: "Signup successful" });
    } else {
      return res.status(400).send({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(req.body)
    console.log(emailId)
    console.log(password)
    if (emailId && password) {
      const userCheck = await UserModel.findOne({
        where: { emailId: emailId },
      });
      if (userCheck) {
        if (bcrypt.compareSync(password, userCheck.password)) {
          const payload = {
            id: userCheck.id,
            name: userCheck.name,
            emailId: userCheck.emailId
          }

          const token = jwt.sign(payload, jwtSecret);
          
          payload.gender = userCheck.gender,
          payload.mobileNo = userCheck.mobileNo,
          payload.dob = userCheck.dob,
          payload.address = userCheck.address,
          payload.mobileNo = userCheck.mobileNo
          payload.token = token
          payload.picture = userCheck.picture ? `${req.app.locals.baseurl}users/${userCheck.picture}` : `${req.app.locals.baseurl}user.png`

          return res.status(200).send({ details: payload, message: "Successfully loged in" });
        } else {
          return res.status(400).send({ message: "Password not match" });
        }
      } else {
        return res.status(400).send({ message: "User not found" });
      }
    } else {
      return res.status(400).send({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};
