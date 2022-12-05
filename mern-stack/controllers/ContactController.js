const User = require("../models/ContactSchema");

const ContactController = {
    getAll: async (req, res) => {
        const allUser = await User.find();

        return res.status(200).json({
            code: 200,
            message: allUser,
        });
    },

    user: async (req, res) => {
        const user = await User.findOne({ _id: req.params.id });

        return res.status(200).json({
            code: 200,
            message: "thành công ",
            data: user,
        });
    },

    create: async (req, res) => {
        const { name, email, phone, type } = req.body.contact;

        const newContact = new User({
            name,
            email,
            phone,
            type,
        });

        await newContact.save();
        return res.status(201).json({
            code: 201,
            message: "Thêm thành công vào danh bạ",
        });
    },

    update: async (req, res) => {
        const { name, email, phone, type, _id } = req.body.contact;
        const update = await User.findByIdAndUpdate(_id, {
            name,
            email,
            phone,
            type,
        });

        return res.status(200).json({
            code: 200,
            message: "update thành công",
            data: update,
        });
    },

    delete: async (req, res) => {
        await User.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({
            code: 200,
            message: "Xóa thành công contact",
        });
    },
};

module.exports = ContactController;
