const router = require("express").Router();
const UserRouter = require("./api/user.router");
const AuthRouter = require("./api/auth.router");

router.use("/user", UserRouter);
router.use("/auth", AuthRouter);

module.exports = router;
