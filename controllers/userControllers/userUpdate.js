const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const { BadRequestError } = require("../../errors");
const path = require("path");

const userUpdate = async (req, res) => {
    const { id: userId } = req.params;
    const updateQuery = {};

    if (req.body?.name) updateQuery.name = req.body.name;

    if (req.files?.image) {
        updateQuery.profileImage =
            "./temp" + path.basename(req.files.image.tempFilePath);
    }

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
