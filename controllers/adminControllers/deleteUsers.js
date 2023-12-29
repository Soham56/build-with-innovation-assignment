const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");

const deleteUser = async (req, res) => {
    const { allUserIds } = req.body;
    await User.deleteMany({ _id: { $in: allUserIds } });

    res.status(StatusCodes.OK).json({
        message: "Successfully Deleted",
    });
};

module.exports = deleteUser;
