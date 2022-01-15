const dotenv = require('dotenv');
dotenv.config();

const aylien = require('"aylien_textapi"');
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

// Cors for cross origin allowance(beacuse by default only origin is allowed)
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

var textapi = new aylien({
    application_key: process.env.API_KEY
 });

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
