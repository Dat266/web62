const ContactController = require("../controllers/ContactController");

const route = require("express").Router();

route.get("/", ContactController.getAll);
route.get("/:id", ContactController.user);
route.post("/create", ContactController.create);
route.put("/update/", ContactController.update);
route.delete("/delete/:id", ContactController.delete);

module.exports = route;
