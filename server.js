// declare mongoDB

const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/censusdb';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

// check connection 
db.on('error', console.error.bind(console, 'failed to connect Mongo'));
db.on('connected', console.log.bind(console, 'Mongo connect sucessfully'))

//Express
const express = require('express');
const app = express()

const port = 8081;
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With Content-Type, Accept");
    next();
});

app.use(express.json());
app.use('/api', require('./route/request'));

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})
