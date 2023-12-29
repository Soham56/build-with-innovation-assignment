require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./db/connectDb");
const expressFileUploader = require("express-fileupload");

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use(express.json());
app.use(expressFileUploader({ useTempFiles: true }));

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
