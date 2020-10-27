const express = require('../../models/LandingPage');
const moment = require('moment')
exports.post = async function (req, res, next) {
    try {
        const queryNewUserID = "SELECT * From users group by userid DESC"

        let checkerUserIDIncrement = await express.sequelize.query(queryNewUserID, {
            type: express.sequelize.QueryTypes.SELECT
        });

        const queryNewUserDetail = "SELECT * From user_detail group by userdetailid DESC"

        let checkeruserdetailidIncrement = await express.sequelize.query(queryNewUserDetail, {
            type: express.sequelize.QueryTypes.SELECT
        });

        const queryNewTicket = "SELECT * From ticket"

        let checkerqueryNewTicketIncrement = await express.sequelize.query(queryNewTicket, {
            type: express.sequelize.QueryTypes.SELECT
        });

        console.log(checkerqueryNewTicketIncrement[1])
        let newUserID = checkerUserIDIncrement[1].userid + 1
        let newDetailID = checkeruserdetailidIncrement[1].userdetailid + 1
        let newTicketID = checkerqueryNewTicketIncrement[1].ticketid + 1


        let create = await express.users.create({
            userid: newUserID,
            nameuser: req.body.nameuser
        })
        let createUserDetail = await express.user_detail.create({
            userdetailid: newDetailID,
            birthdate: moment().toISOString(),
            userid: newUserID,
            jk: req.body.jk,
            address: req.body.address
        })
        let createTicket = await express.ticket.create({
            ticketid: newTicketID,
            userid: newUserID
        })


        res.status(200).send({ message: 'sukses' });
    } catch (error) {
        res.status(500).send(error)
    }
};