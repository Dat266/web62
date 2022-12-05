const VerifyMiddleware = (req, res, next) => {
    const user = [
        { username: "alice", apiKey: "alice@123" },
        { username: "bob", apiKey: "bob@123" },
        { username: "charlie", apiKey: "charlie@123" },
    ];
    const isExistUser = user.findIndex(
        (user) => user.apiKey === req.query.apiKey
    );

    if (isExistUser != -1) {
        next();
    } else {
        res.json({
            messgae: "user không tồn tại",
        });
    }
};

module.exports = VerifyMiddleware;
