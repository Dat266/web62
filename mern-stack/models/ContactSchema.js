const { Schema, model } = require("mongoose");

const ContactSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: Number },
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("ContactSchema", ContactSchema);
