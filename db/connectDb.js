const mongoose = require("mongoose");

const connectDB = (mongo_uri) => {
    return mongoose.connect(mongo_uri);
};

module.exports = connectDB;
