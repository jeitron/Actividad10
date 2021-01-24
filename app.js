const express = require('express');
const bodyparser = require('body-parser');
const rutas = require('./rutas/rutasest')

const app = express();
app.use( bodyparser.json());

app.use('/api', rutas);

module.exports = app;