const route = require("express").Router();

const SytemController = require("../controller/SytemController");
const VerifyMiddleware = require("../middleware/VerifyMiddleware");

route.get("/teacher", VerifyMiddleware, SytemController.Teacher);
route.get("/student", VerifyMiddleware, SytemController.Student);
route.get("/subject", VerifyMiddleware, SytemController.Subject);

module.exports = route;
