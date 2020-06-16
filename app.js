const express = require('express');
const path = require('path');

const routes = require('./src/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use('/', routes);
app.use(express.static('dist'));

module.exports = app;
