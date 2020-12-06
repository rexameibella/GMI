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

        const queryNewTicket = "SELECT * From ticket group by ticketid DESC"

        let checkerqueryNewTicketIncrement = await express.sequelize.query(queryNewTicket, {
            type: express.sequelize.QueryTypes.SELECT
        });

        // console.log(checkerqueryNewTicketIncrement[1])
        let newUserID = checkerUserIDIncrement[0] ? checkerUserIDIncrement[0].userid + 1 : 1
        let newDetailID = checkeruserdetailidIncrement[0] ? checkeruserdetailidIncrement[0].userdetailid + 1 : 1
        let newTicketID = checkerqueryNewTicketIncrement[0] ? checkerqueryNewTicketIncrement[0].ticketid + 1 : 1

        console.log(checkerUserIDIncrement, checkeruserdetailidIncrement, checkerqueryNewTicketIncrement, 'TEST')

        let create = await express.users.create({
            userid: newUserID,
            nameuser: req.body.nameuser
        })
        console.log(create, 'create')
        let createUserDetail = await express.user_detail.create({
            userdetailid: newDetailID,
            birthdate: moment(req.body.birthdate).toISOString(),
            userid: newUserID,
            jk: req.body.jk,
            address: req.body.address
        })
        let createTicket = await express.ticket.create({
            ticketid: newTicketID,
            userid: newUserID
        })


        res.status(200).send('OK');
    } catch (error) {

        next(error)
    }
};