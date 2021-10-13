const express = require('express');
const router = express.Router();

// Importar controladores
const EmpleadoController = require('./controllers/EmpleadoController');

// Products
router.post('/', EmpleadoController.create);
router.get('/getByName/:name', EmpleadoController.showByKeyWord);
router.get('/', EmpleadoController.sowAll);
router.get('/:id', EmpleadoController.showById);
router.patch('/:id', EmpleadoController.update);
router.delete('/:id', EmpleadoController.delete);


module.exports = router;