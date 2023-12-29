const customErrorApi = require("./customApiError");
const { StatusCodes } = require("http-status-codes");

class UnauthenicationError extends customErrorApi {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = UnauthenicationError;
