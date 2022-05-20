const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET;
const UserModel = require("../models/user.model");

exports.list = async (req, res) => {
  try {
    const userDetails = await UserModel.findAll();

    const modifyDetails = userDetails.map((user) => {
      return Object.assign(
        {},
        {
          id: user.id,
          name: user.name,
          gender: user.gender,
          mobileNo: user.mobileNo,
          emailId: user.emailId,
          dob: user.dob,
          address: user.address,
          city: user.city,
          state: user.state,
          country: user.country,
          zipcode: user.zipcode,
          picture:
            user.picture != "" && user.picture != null
              ? req.app.locals.baseurl + "users/" + user.picture
              : req.app.locals.baseurl + "user.png",
        }
      );
    });

    return res.status(200).send(modifyDetails);
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, mobileNo, emailId, address } = req.body;
    if (!name || !mobileNo || !emailId || !address)
      return res.status(400).send({ message: "All fields are required !" });
    await UserModel.create({
      name,
      emailId,
      mobileNo,
      address,
    });
    return res.status(201).send({ message: "Successfully created !" });
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.body.id || null;
    if (!id) return res.status(400).send({ message: "Id is required" });
    await UserModel.destroy({ where: { id: id } });
    return res.status(200).send({ message: "Successfully deleted !" });
  } catch (error) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};
