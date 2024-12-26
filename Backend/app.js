const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
connectToDb();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World... The server is created.... now acn  modify server so you are now a sertify developer...');
});


module.exports = app;