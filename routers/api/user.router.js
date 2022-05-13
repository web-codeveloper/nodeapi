const router = require("express").Router();
const UserController = require("../../controllers/user.controller");

router.get("/list", UserController.list);

module.exports = router;
