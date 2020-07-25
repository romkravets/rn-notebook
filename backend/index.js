const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { ClientCtrl } = require('./controllers');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/clients', ClientCtrl.all);
app.post('/clients', ClientCtrl.create);

app.listen(5050, function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('Server run!')
});