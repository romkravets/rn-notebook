const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema(
    {
        id: String,
        fullname: String,
        phone: String,
        birthday: String,
    },
    {
        timestamps: true
    }
);

ClientSchema.virtual('appointments', {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'client',
    justOne: false // set true for one-to-one relationship
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;





