const SytemController = {
    Teacher: (req, res) => {
        res.json({
            message: "teacher",
        });
    },
    Student: (req, res) => {
        res.json({
            message: "student",
        });
    },
    Subject: (req, res) => {
        res.json({
            message: "subject",
        });
    },

    Total: (req, res) => {
        const statisticUser = [
            { user: "alice", student: 5, teacher: 1, subject: 0 },
            { user: "bob", student: 10, teacher: 1, subject: 8 },
        ];

        res.json({
            message: statisticUser,
        });
    },
};

module.exports = SytemController;
