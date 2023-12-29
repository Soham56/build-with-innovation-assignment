const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
    const customError = {};
    customError.msg = err.message || "Something went wrong, try again later";
    customError.status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;

    if (
        customError.msg.includes(".filter is not a function") ||
        customError.msg.includes(".map is not a function")
    ) {
        customError.msg =
            "Please provide values in correct format, (Array Of objects)";
        customError.status = StatusCodes.BAD_REQUEST;
    } else if (err.name == "CastError") {
        customError.msg = `No user present with id: ${err.value}`;
        customError.status = StatusCodes.NOT_FOUND;
    } else if (err.name == "ValidationError") {
        const errorFields = Object.keys(err.errors);
        (customError.msg = `Please provide [${errorFields.toString()}] fields`),
            (customError.status = StatusCodes.BAD_REQUEST);
    }

    res.status(customError.status).json({ msg: customError.msg });
};

module.exports = errorHandler;
