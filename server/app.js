const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const route = require('./routes/router');
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

mongoose.connect(config.get('mongoUri'), function (err, connect) {
    if (err) {
        console.log('连接失败！');
        return;
    } else {
        console.log('连接成功！');
    }
});

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

route.setRoutes(app);

app.use(express.static('client/dist'));

app.get('/api', (req, res)=> {
    res.send("TODO...");
});

app.listen(3000, ()=> {
    console.log("Server started: http://localhost:3000")
});