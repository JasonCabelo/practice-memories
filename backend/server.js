const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const post = require('./routes/post');
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/post',post);
const server = app.listen(PORT, () => console.log('listening on port ' + PORT)); 

process.on('unhandledRejection', (err, promise) => {
    console.log('Unhandled rejection: ' + err);
    server.close(() => process.exit(1));
});