const { validationResult } = require('express-validator');
const { Appointment, Client } = require('../models');

function AppointmentController() {}

const create = async  function(req, res) {
    const errors = validationResult(req);
    const data = {
        client: req.body.client,
        service:  req.body.service,
        description: req.body.description,
        price: req.body.price,
        date: req.body.data,
        time: req.body.time,

    };

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    const client = await Client.findOne({_id: data.client});

    if (!client) {
        return res.status(404).json({
            success: false,
            message: 'PATIENT_NOT_FOUND',
        });
    }

    Appointment.create(data, function(err, doc) {
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

const remove = async function(req, res) {
    const id = req.params.id;

    try {
        await Appointment.findOne({_id: id});
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: 'APPOINTMENT_NOT_FOUND',
        });
    }

    Appointment.deleteOne({ _id: id }, err => {
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

const all = function (req, res) {
    Appointment.find({}).populate('client').exec (function(err, docs) {
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
AppointmentController.prototype = {
    all,
    create,
    remove,
};

module.exports = AppointmentController;