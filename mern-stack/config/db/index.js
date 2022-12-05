const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect(`${process.env.MONGO_URL}/contact`, (err) => {
        if (err) console.log("connection failed");

        console.log("successfully connected");
    });
};

module.exports = { connect };
