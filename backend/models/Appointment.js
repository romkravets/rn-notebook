const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    service: String,
    description: String,
    price: Number,
    date: String,
    time: String,
    clientId: {type: Schema.Types.ObjectId, ref: "Client"},
    },
    {
    timestamps: true
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;