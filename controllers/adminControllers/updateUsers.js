const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");

const updateUsers = async (req, res) => {
    const { updateFields } = req.body;
    const updatePromises = updateFields.map((updateData) => {
        const { userId, ...fields } = updateData;
        return User.updateOne({ _id: userId }, fields);
    });
    Promise.allSettled(updatePromises).then((values) => {
        return res.status(StatusCodes.OK).json(values);
    });
};

module.exports = updateUsers;
