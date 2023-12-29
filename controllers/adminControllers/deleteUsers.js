const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const { BadRequestError } = require("../../errors");

const deleteUsers = async (req, res) => {
    const { userIds } = req.body;
    if (!userIds)
        throw new BadRequestError("Please provide data in correct format !");
    await User.deleteMany({ _id: { $in: userIds } });

    res.status(StatusCodes.OK).json({
        message: "Successfully Deleted",
    });
};

module.exports = deleteUsers;
