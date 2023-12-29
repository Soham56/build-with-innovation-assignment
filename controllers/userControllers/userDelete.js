const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../../errors");
const User = require("../../models/user");

const userDelete = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) throw new BadRequestError("User not found !");

    res.status(StatusCodes.OK).json({
        message: "Successfully Deleted",
    });
};

module.exports = userDelete;
