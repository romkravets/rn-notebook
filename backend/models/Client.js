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

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;





