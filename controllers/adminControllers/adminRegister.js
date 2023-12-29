const { StatusCodes } = require("http-status-codes");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const path = require("path");

const adminRegister = async (req, res) => {
    const { name, password, email } = req.body;
    let profileImage = req.files?.image?.tempFilePath || "/demo-profile.jpg";
    profileImage = "./temp/" + path.basename(profileImage);
    const user = await User.create({
        name,
        email,
        password,
        profileImage,
        role: "admin",
    });

    const token = jwt.sign(
        { userId: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRESIN }
    );

    res.status(StatusCodes.CREATED).json({ userId: user._id, token });
};

module.exports = adminRegister;
