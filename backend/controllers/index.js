const  ClientController = require('./ClientController');
const  AppointmentController = require('./AppointmenController');

module.exports = {
    ClientCtrl: new ClientController(),
    AppointmentCtrl: new AppointmentController()
};