const express = require('express');
const cors = require('cors');
/*
const bodyParser = require('body-parser');
*/

const db = require('./core/db');
const {clientValidation, appointmentValidation} = require('./utils/validations');
const { ClientCtrl, AppointmentCtrl } = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/clients', ClientCtrl.all);
app.post('/clients', clientValidation.create, ClientCtrl.create);
app.delete('/clients/:id', ClientCtrl.remove);
app.patch('/clients/:id', clientValidation.create, ClientCtrl.update);
app.get('/clients/:id', ClientCtrl.show);

app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, AppointmentCtrl.create);
app.delete('/appointments/:id', AppointmentCtrl.remove);
app.patch('/appointments/:id', appointmentValidation.update, AppointmentCtrl.update);

app.listen(5050, function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('Server run!')
});