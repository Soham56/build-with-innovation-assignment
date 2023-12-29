const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const { BadRequestError } = require("../../errors");

const updateUsers = async (req, res) => {
    const { updateFields } = req.body;
    if (!updateFields)
        throw new BadRequestError("Please provide data in correct format !");
    const updatePromises = updateFields.map((updateData) => {
        const { userId, name, email, role } = updateData;
        const updateQuery = {};
        if (name) updateQuery.name = name;
        if (email) updateQuery.email = email;
        if (role) updateQuery.role = role;
        return User.updateOne({ _id: userId }, updateQuery);
    });

    let updateResult = await Promise.allSettled(updatePromises);
    updateResult = updateResult.map((result, index) => {
        if (result.status === "rejected") {
            let errorMessage = result.reason;
            if (result.reason.name === "CastError")
                errorMessage = `${updateFields[index].userId} not defined`;
            else if (result.reason.code === 11000)
                errorMessage = `${result.reason.keyValue.email} is already present`;
            return {
                message: `${updateFields[index].userId} not updated`,
                reason: errorMessage,
            };
        }
        return {
            message: `${updateFields[index].userId} Updated Successfully`,
        };
    });

    return res.status(StatusCodes.OK).json({ updateResult });
};

module.exports = updateUsers;
