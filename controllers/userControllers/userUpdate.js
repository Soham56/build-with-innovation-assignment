const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const { BadRequestError } = require("../../errors");

const userUpdate = async (req, res) => {
    const { userId } = req.params;
    const { name, profileImage } = req.body;

    const user = await User.findOneAndUpdate(
        { _id: userId },
        { name, profileImage },
        { new: true }
    );

    if (!user) throw new BadRequestError("User Not found");

    res.status(StatusCodes.OK).json({
        message: "Updated Successfully",
    });
};

module.exports = userUpdate;
