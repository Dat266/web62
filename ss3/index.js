const express = require("express");

const routers = require("./routes");
const LogMiddleware = require("./middleware/LogMiddleware");

const PORT = 3002;

const app = express();

app.use(express.json());
app.use(LogMiddleware);

routers(app);

app.listen(PORT, () => {
    console.log(`Running port ${PORT}`);
});
