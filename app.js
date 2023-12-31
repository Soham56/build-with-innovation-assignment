require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./db/connectDb");
const expressFileUploader = require("express-fileupload");

const errorHandlerMiddleware = require("./middlewares/errorHandler");
const routeNotExistsMiddleware = require("./middlewares/routeNotFound");
const authenticateAdminMiddleware = require("./middlewares/authenticateAdmin");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoute");
const userRoutes = require("./routes/userRoute");

app.use(express.json());
app.use(expressFileUploader({ useTempFiles: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", [authenticateAdminMiddleware, adminRoutes]);
app.use(errorHandlerMiddleware);
app.use(routeNotExistsMiddleware);

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
