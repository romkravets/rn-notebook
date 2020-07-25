const { Client } = require('../models');

function ClientController() {}

const create = function(req, res) {
    const data = {
        fullName: req.body.fullName,
        phone:  req.body.phone,
    };
    console.log(data);
    Client.create(data, function (err, doc) {
        if(err) {
            return res.status(500).json({
                status: false,
                massage: err
            });
        }

        res.status(201).join({
            status: true,
            data: doc
        });
    });
}


const all = function (req, res) {
    Client.find({}, function(err, docs) {
    if(err) {
        return res.status(500).json({
            status: false,
            massage: err
        });
    }

    res.join({
        status: true,
        data: docs
    });
});

}

ClientController.prototype = {
    all,
    create
};

module.exports = ClientController;