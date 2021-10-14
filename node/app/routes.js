const express = require('express');
const router = express.Router();

// Importar controladores
const EmpleadoController = require('./controllers/EmpleadoController');

// Products
router.post('/', EmpleadoController.create);
router.get('/getByName/:name', EmpleadoController.showByKeyWord);
router.get('/empl', EmpleadoController.showAll);
router.get('/:id', EmpleadoController.showById);
router.patch('/:id', EmpleadoController.update);
router.delete('/:id', EmpleadoController.delete);

// Importar controladores
const RolController = require('./controllers/RolController');

// Products
router.post('/rol', RolController.create);
router.get('/rol/getByName/:name', RolController.showByKeyWord);

router.get('/rol/:id', RolController.showById);
router.patch('/rol/:id', RolController.update);
router.delete('/rol/:id', RolController.delete);
router.get('/prueba/empl',RolController.show);

// Importar controladores
const ProductoController = require('./controllers/ProductoController');

// Products
router.post('/pro', ProductoController.create);
router.get('/pro/getByName/:name', ProductoController.showByKeyWord);
router.get('/pro/empl', ProductoController.showAll);
router.get('/pro/:id', ProductoController.showById);
router.patch('/pro/:id', ProductoController.update);
router.delete('/pro/:id', ProductoController.delete);


module.exports = router;