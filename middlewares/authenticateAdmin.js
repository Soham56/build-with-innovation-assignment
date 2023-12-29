const jwt = require("jsonwebtoken");
const user = require("../models/user");
const { ForbiddenRouteError } = require("../errors");

const verifyAdmin = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer "))
        throw new ForbiddenRouteError("Admin Not Verified !");
    const token = authorizationHeader.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const { role } = await user.findById(userId);
    if (role === "user") throw new ForbiddenRouteError("You have no access !");
    next();
};

module.exports = verifyAdmin;
