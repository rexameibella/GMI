const express = require('../../models/LandingPage');
const moment = require('moment')
exports.get = async function (req, res, next) {
    try {

        const query = "SELECT t.ticketid AS id ,t.userid , ud.userdetailid, ud.birthdate, ud.jk ,ud.address , u.nameuser  From ticket t \
        INNER JOIN user_detail AS ud ON t.userid = ud.userid \
        INNER JOIN users AS u ON t.userid = u.userid \
        Group By ud.userid ASC"

        const data = await express.sequelize.query(query, {
            type: express.sequelize.QueryTypes.SELECT
        });

        let dataSend = {
            success: true,
            message: 'List by Feature',
            data: data
        }
        res.status(200).send(dataSend);
    } catch (error) {
        next(error)
    }
};

// userdetailid	birthdate	userid	jk	address	created_at	updated_at