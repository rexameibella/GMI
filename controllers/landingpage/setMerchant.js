const express = require('../../models/LandingPage');

exports.post = async function (req, res, next) {
    try {
        let create = await express.merchantOrder.create({
            username: req.body.username,
            company: req.body.company,
            email: req.body.email,
            industry: req.body.industry,
            phone: req.body.phone
        })
        res.status(200).send({message:'sukses'});
    } catch (error) {
        res.status(500).send(error)
    }
};