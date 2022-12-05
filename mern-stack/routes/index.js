const contact = require("./contact");

const router = (app) => {
    app.use("/contact", contact);
};

module.exports = router;
