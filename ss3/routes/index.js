const resource = require("./resource");
const system = require("./system");

const routers = (app) => {
    app.use("/", resource);
    app.use("/system", system);
};

module.exports = routers;
