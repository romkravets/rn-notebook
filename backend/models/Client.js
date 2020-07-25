const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema({
    id: String,
    fullName: String,
    phone: String
    },
    {
        timestamps: true
    }
);

const Client = mongoose.model('Client', ClientSchema);

module.export = Client;





