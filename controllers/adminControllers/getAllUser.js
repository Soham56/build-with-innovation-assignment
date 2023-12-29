const { StatusCodes } = require("http-status-codes");
const user = require("../../models/user");

const getAllUsers = async (req, res) => {
    const users = await user.find({ role: "user" });
    return res.status(StatusCodes.OK).json({ users });
};

module.exports = getAllUsers;
