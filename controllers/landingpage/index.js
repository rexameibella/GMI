//const express = require('../../models/LandingPage');
const mongoUser = require('../../models/mongoModels')

exports.get = async function (req, res, next) {
    try {
        console.log(req.query.row)
        const query = "SELECT * From industry"
        // const data = await express.sequelize.query(query, {
        //     type: express.sequelize.QueryTypes.SELECT
        // });
        let b = await mongoUser.users.find({}).skip(0).limit(10)
        //console.log(b)
        res.status(200).send(b);
    } catch (error) {
        next(error)
    }
};
