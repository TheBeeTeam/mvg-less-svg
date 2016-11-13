'use strict';

const express     = require('express');
const path        = require('path');


let app = express();


// Serve static assets from the /public folder
app.use('/', express.static(path.join(__dirname, '/app')));


module.exports = app;