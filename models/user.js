const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must provide your name"],
        },
        email: {
            type: String,
            required: [true, "You must provide your email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "You must privide your password"],
        },
        profileImage: {
            type: String,
        },
        role: {
            type: String,
            required: [true, "Please provide your role"],
            enum: {
                values: ["user", "admin"],
                message: `{VALUE} is supported`,
            },
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
});

module.exports = mongoose.model("User", userSchema);
