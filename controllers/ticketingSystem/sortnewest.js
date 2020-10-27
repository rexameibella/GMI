const express = require('../../models/LandingPage');

exports.get = async function (req, res, next) {
    try {
        const query = "SELECT * From ticket group by ticketid DESC"

        const data = await express.sequelize.query(query, {
            type: express.sequelize.QueryTypes.SELECT
        });
        let dataSend = {
            success:true,
            message : 'List by Ticket ID',
            data : data
        }
        res.status(200).send(dataSend);
    } catch (error) {
        next(error)
    }
};
