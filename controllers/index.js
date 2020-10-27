
exports.get = async function (req, res, next) {
    try {
        let data = {
            path : '/',
            Message:'Ping Success'
        }
        res.status(200).send(data);
    } catch (error) {
        next(error)
    }
};
