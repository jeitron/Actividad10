const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var estesquema = new Schema({
documento: Number,
nombre: String,
edad: Number,
grado: Number,
telefono: Number,
correo: String

});

module.exports = mongoose.model('estudiante', estesquema);