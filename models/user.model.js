const Sequelize = require("sequelize");
const sequelize = require("../configs/db.connection");

const User = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gender: {
    type: Sequelize.ENUM("male", "female", "other"),
    allowNull: false,
    defaultValue: "male",
  },
  mobileNo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  emailId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
