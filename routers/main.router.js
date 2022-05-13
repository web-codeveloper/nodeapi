const router = require("express").Router();
const UserRouter = require("./api/user.router");

router.use("/user", UserRouter);

module.exports = router;
