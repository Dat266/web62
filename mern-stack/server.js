const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const router = require("./routes");
const db = require("./config/db");

const app = express();
const PORT = 3001;

app.use(cors());
dotenv.config();
app.use(express.json());

db.connect();

//init router

router(app);

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
});
