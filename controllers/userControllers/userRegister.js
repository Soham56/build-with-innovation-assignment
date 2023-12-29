const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../../errors");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
    const { name, password, email } = req.body;
    const profileImage = req.files?.image || "./images/demo-profile.jpg";
    const user = await User.create({
        name,
        email,
        password,
        profileImage,
        role: "user",
    });

    const token = jwt.sign(
        { userId: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRESIN }
    );

    res.status(StatusCodes.CREATED).json(token);
};

module.exports = userRegister;
