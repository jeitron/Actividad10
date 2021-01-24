const express = require('express');
const controladorest = require('../controlador/controlador');
const api = express.Router();

api.post('/', controladorest.crear );
api.get('/listado', controladorest.listar);
api.put('/:iduest', controladorest.update);
api.delete('/:idest', controladorest.eliminar);


module.exports = api;