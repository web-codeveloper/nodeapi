const router = require("express").Router();
const UserController = require("../../controllers/user.controller");

router.get("/list", UserController.list);
router.post("/create", UserController.create);
router.post("/delete", UserController.delete);

module.exports = router;
