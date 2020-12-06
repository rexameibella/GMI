const express = require('../../models/LandingPage');

exports.get = async function (req, res, next) {

    try {
        console.log(req.query)
        const queryCount = `SELECT count(ticketid) AS count From ticket order by ticketid ${req.query.order}`
        const dataCount = await express.sequelize.query(queryCount, {
            type: express.sequelize.QueryTypes.SELECT
        });

        const query = `SELECT * From ticket order by ticketid ${req.query.order} LIMIT ${req.query.limit || dataCount[0].count} OFFSET ${req.query.offset || 0}`
        const data = await express.sequelize.query(query, {
            type: express.sequelize.QueryTypes.SELECT
        });
        let dataCountSend = dataCount[0].count
        let dataSend = {
            success: true,
            message: 'List by Ticket ID',
            pageNow: Math.round(req.query.offset / req.query.limit),
            maxPage: Math.round(dataCountSend / req.query.limit) - 1,
            count: dataCountSend,
            data: data,
        }
        res.data = dataSend
        res.answerWith(200,'SortNewest')
        //res.status(200).send(dataSend);
    } catch (error) {
        next(error)
    }
};


// {
//     order : String(req.query.order),
//     page: parseInt(req.query.page),
//     rowsPerPage: parseInt(req.query.rowsPerPage)
// },