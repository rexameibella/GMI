const express = require('../../models/LandingPage');

exports.get = async function (req, res, next) {
    try {
        const query = "SELECT * From industry"
        const data = await express.sequelize.query(query, {
            type: express.sequelize.QueryTypes.SELECT
        });
        res.status(200).send(data);
    } catch (error) {
        next(error)
    }
};
