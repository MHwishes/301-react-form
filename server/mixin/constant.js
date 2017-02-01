var constant = {
    httpCode: {
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,
        REDIRECTED: 301,
        NOT_FOUND: 404,
        UNAUTHORIZED: 401,
        BAD_REQUEST: 400,
        PRECONDITION_FAILED: 412,
        FORBIDDEN: 403,
        INTERNAL_SERVER_ERROR: 500
    },
    time: {
        MINUTE_PER_HOUR: 60,
        SECONDS_PER_MINUTE: 60,
        HOURS_PER_DAY: 24,
        MILLISECOND_PER_SECONDS: 1000
    }
};

module.exports = constant;
