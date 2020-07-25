const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    service: String,
    description: String,
    price: Number,
    data: String,
    time: String,
    userId: {type: Schema.Types.ObjectId, ref: "Client"},
    },
    {
    timestamps: true
    }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.export = Appointment;