const CustomError = require("./Error");
const Enum = require("../config/Enum");

class Response {
    constructor() {}

    static successResponse(data, code = 200) {
        return {
            code,
            data
        }
    }

    static errorResponse(error) {
        if (error instanceof CustomError) {
            return {
                code: error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }
        } else {
            return {
                code: Enum.HTTP_CODES.INTERNAL_SERVER_ERROR,
                error: {
                    message: "Unknown error!",
                    description: error.message
                }
            }
        }
        
    }
}

module.exports = Response;