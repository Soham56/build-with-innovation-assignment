const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const adminRegister = async (req, res) => {
    const { name, password, email } = req.body;
    const profileImage = req.files?.image || "./images/demo-profile.jpg";
    const user = await User.create({
        name,
        email,
        password,
        profileImage,
        phoneNumber,
        role: "admin",
    });

    const token = jwt.sign(
        { userId: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRESIN }
    );

    res.status(StatusCodes.CREATED).json(token);
};

module.exports = adminRegister;
