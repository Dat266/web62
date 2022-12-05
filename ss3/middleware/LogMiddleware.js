const LogMiddleware = (req, res, next) => {
    const currDate = new Date();
    console.log(`New request at ${currDate}`);
    next();
};

module.exports = LogMiddleware;
