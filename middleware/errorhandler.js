const { constants } = require('../constant')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("111", err.message)
    res.json({ message: err.message, code: statusCode })
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: 'valadation failed', message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: 'Not Found', message: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: 'Forbidden values', message: err.message, stackTrace: err.stack })
            break;
        case constants.UNAUTHORISED:
            res.json({ title: 'Unauthorised', message: err.message, stackTrace: err.stack })
            break;
        default:
            break;
    }
};

module.exports = errorHandler