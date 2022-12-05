const route = require("express").Router();

const SytemController = require("../controller/SytemController");

route.get("/statistic", SytemController.Total);

module.exports = route;
