const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3001;

const contacts = [
    {
        id: "a8fa5bee-cb01-4fb0-8465-e8b820567000",
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal",
    },
    {
        id: "770f7bd7-f960-4a9f-be40-67621e415bb6",
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal",
    },
    {
        id: "f53cc6d7-86f5-460a-9c2c-bbadc0450507",
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional",
    },
];

app.use(express.json());

// get all contacts

app.get("/contact/user", (req, res) => {
    return res.json({
        message: "get all contacts",
        data: contacts,
    });
});

// get user in contacts

app.get("/contact/user/:id", (req, res) => {
    const userId = req.params;
    const findUserId = contacts.find((user) => user.id === userId.id);
    return res.json({
        message: "get user success",
        data: findUserId,
    });
});

// create user contacts

app.post("/contact/add", (req, res) => {
    const { name, phone, type, email } = req.body;

    // 1. Validation

    if (!name || !phone || !type || !email) {
        return res.json({
            msg: "Missing required keys",
            statusCode: 400,
        });
    }

    // 2. Does this record exist in DB?

    const isExist = contacts.findIndex((contact) => contact.phone === phone);
    if (isExist !== -1) {
        return res.json({
            msg: "Can not upload contact with this number",
            statusCode: 400,
        });
    }

    const newUser = {
        ...req.body,
        id: uuidv4(),
    };
    contacts.push(newUser);
    return res.json({
        message: "add user contacts success",
        data: contacts,
    });
});

// update user

app.put("/contact/edit/:id", (req, res) => {
    const userId = req.params;
    const userIndex = contacts.findIndex((user) => user.id === userId.id);
    contacts[userIndex] = {
        id: userId.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
    };
    return res.json({
        message: "update success",
        data: contacts[userIndex],
    });
});

// delete user

app.delete("/contact/delete/:id", (req, res) => {
    const userId = req.params.id;
    const currContact = contacts.filter((user) => user.id !== userId);
    return res.json({
        message: "delete success",
        data: currContact,
    });
});

app.listen(PORT, () => {
    console.log(`server running port ${PORT}`);
});
