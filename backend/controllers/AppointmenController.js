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
        date: req.body.date,
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

const update = async function(req, res) {
    const appointmentId = req.params.id;
    const errors = validationResult(req);

    const data = {
        service:  req.body.service,
        description: req.body.description,
        price: req.body.price,
        date: req.body.date,
        time: req.body.time,
    };

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array(),
        });
    }

    Appointment.updateOne({ _id: appointmentId }, { $set: data }, function(err, doc) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err,
            });
        }

        if (!doc) {
            return res.status(404).json({
                success: false,
                message: 'APPOINTMENT_NOT_FOUND',
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

/*const all = function (req, res) {
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
}*/

AppointmentController.prototype = {
    all,
    create,
    remove,
    update
};

module.exports = AppointmentController;