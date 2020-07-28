const { validationResult } = require('express-validator');
const { Client } = require('../models');

function ClientController() {}

const create = function(req, res) {
    const errors = validationResult(req);
    const data = {
        fullname: req.body.fullname,
        phone: req.body.phone,
        birthday: req.body.birthday,
    };

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    Client.create(data, function(err, doc) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.status(201).json({
            success: true,
            data: doc
        });
    });
};

const update = async function(req, res) {
    const clientId = req.params.id;
    const errors = validationResult(req);

    const data = {
        fullname: req.body.fullname,
        phone: req.body.phone,
        birthday: req.body.birthday,
    };

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array(),
        });
    }

    Client.updateOne({ _id: clientId }, { $set: data }, function(err, doc) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err,
            });
        }

        if (!doc) {
            return res.status(404).json({
                success: false,
                message: 'CLIENT_NOT_FOUND',
            });
        }

        res.json({
            success: true,
        });
    });
};

const remove = async function(req, res) {
    const id = req.params.id;

    try {
        await Client.findOne({_id: id});
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'PATIENT_NOT_FOUND',
        });
    }

    Client.deleteOne({ _id: id }, err => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err,
            });
        }

        res.json({
            status: 'succces',
        });
    });
};

const show = async function(req, res) {
    const id = req.params.id;
    try {
        const client = await Client.findById(id).exec();

        res.json({
            status: 'succces',
            data: client
        });
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'CLIENT_NOT_FOUND'
        });
    }
};

const all = function (req, res) {
    Client.find({}, function(err, docs) {
    if(err) {
        return res.status(500).json({
            status: false,
            massage: err
        });
    }

    res.json({
        status: true,
        data: docs
    });
});

}

ClientController.prototype = {
    all,
    create,
    update,
    remove,
    show,
};

module.exports = ClientController;