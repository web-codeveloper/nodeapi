const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

(async () => {
  await sequelize.authenticate();
  console.log("Database Connected Successfully!");
  await sequelize.sync();
  console.log("Tables created successfully!");
})();

module.exports = sequelize;
