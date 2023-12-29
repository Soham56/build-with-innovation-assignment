const customErrorApi = require("./customApiError");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends customErrorApi {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;
