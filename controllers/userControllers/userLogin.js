const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { BadRequestError, UnauthenicationError } = require("../../errors");
const { StatusCodes } = require("http-status-codes");

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new BadRequestError("User Not Find, Please Register");
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new UnauthenicationError("Invalid Password !");
    }

    const token = jwt.sign(
        { userId: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRESIN }
    );

    res.status(StatusCodes.OK).json({ userId: user._id, token });
};

module.exports = userLogin;
