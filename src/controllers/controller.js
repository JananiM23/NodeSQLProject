const service = require('../Services/service');
const logger = require('../../middlewares/logger');

exports.create = async(req, res) => {
    try {
        let reqData = req.body;

        if(reqData) {
            const resData = service.create(reqData);
            // logger.info('New data added successfully');
            res.status(200).send({status: true, Message: "Data created successfully", Response: resData});
        }
        else {
            // logger.error('request data not valid');
            res.status(400).send({status: false, Message: "Invalid request"});
        }
    } catch(error) {
        // logger.warn('Internal server error');
        res.status(500).send({status: false, Message: "Something went wrong!"});
    }
} 

exports.listAll = async(req, res) => {
    try {
        const resData = service.list();
         return res.status(200).send({ Status: true, Message: "All players data listed successfully", Response: resData})
    } catch(error) {
        res.status(500).send({status: false, Message: "Something went wrong!"});
    }
}

