const moment = require('moment');
// const uuid = require('uuid/v4');

module.exports = function (req, res, next) {
    //req.connection.setTimeout(3600 * 1000);

    req.ipAddress = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //console.log(req.ipAddress)

    // req.requestId = uuid();
    req.requestTime = moment();

    // req.bugSnag = bugSnagClient;
    // req.logger = logger(req.requestId);

    res.data = {};
    res.answerWith = function (status, message) {
        const endTime = moment();
        const duration = moment.duration(endTime.diff(req.requestTime));

        const timeFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";

        // const utils = require('../utils')(req);

        // utils.auditTrail.insertExpress("AUTOMATIC AUDIT", 'Audit Trail Automatically Generated By System');

        res.status(status);

        res.json({
            status: status.toString(),
            message: message,
            data: res.data,
            meta: {
                startAt: req.requestTime.format(timeFormat),
                finishedAt: endTime.format(timeFormat),
                duration: duration.asMilliseconds() + "ms",
                requestId: req.requestId,
            }
        })
    };

    next();
};
