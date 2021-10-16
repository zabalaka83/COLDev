const express = require('express');
const router = express.Router();

// Importar controladores
const EmpleadoController = require('./controllers/EmpleadoController');
const RolController = require('./controllers/RolController');

// Empleado
router.post('/', EmpleadoController.create);
router.get('/getByName/:name', EmpleadoController.showByKeyWord);
router.get('/empl', EmpleadoController.showAll);
router.put('/log', EmpleadoController.showByCedula);
router.get('/:id', EmpleadoController.showById);
router.patch('/:id', EmpleadoController.update);
router.delete('/:id', EmpleadoController.delete);

// Rol
router.post('/rol', RolController.create);
router.get('/rol/getByName/:name', RolController.showByKeyWord);

router.get('/rol/:id', RolController.showById);
router.patch('/rol/:id', RolController.update);
router.delete('/rol/:id', RolController.delete);
router.get('/rol/empl',RolController.show);

// Importar controladores
const ProductoController = require('./controllers/ProductoController');

// Producto
router.post('/pro', ProductoController.create);
router.get('/pro/getByName/:name', ProductoController.showByKeyWord);
router.get('/pro/prod', ProductoController.showAll);
router.get('/pro/:id', ProductoController.showById);
router.patch('/pro/:id', ProductoController.update);
router.delete('/pro/:id', ProductoController.delete);

// Importar controladores
const ClienteController = require('./controllers/ClienteController');

// Cliente
router.post('/cliente', ClienteController.create);
router.get('/cliente/getByName/:name', ClienteController.showByKeyWord);
router.get('/cliente/clie', ClienteController.show);
router.get('/cliente/:id', ClienteController.showById);
router.patch('/cliente/:id', ClienteController.update);
router.delete('/cliente/:id', ClienteController.delete);

// Importar controladores
const ProductoPendienteController = require('./controllers/ProductoPendienteController');

// ProductoPendiente
router.post('/propen', ProductoPendienteController.create);
router.get('/propen/getByName/:name', ProductoPendienteController.showByKeyWord);
router.get('/propen/pro', ProductoPendienteController.show);
router.get('/propen/:id', ProductoPendienteController.showById);
router.patch('/propen/:id', ProductoPendienteController.update);
router.delete('/propen/:id', ProductoPendienteController.delete);

module.exports = router;


// Importar controladores
const VentaController = require('./controllers/VentaController');

// Venta
router.post('/venta', VentaController.create);
router.get('/venta/getByName/:name', VentaController.showByKeyWord);
router.get('/venta/pro', VentaController.show);
router.get('/venta/:id', VentaController.showById);
router.patch('/venta/:id', VentaController.update);
router.delete('venta//:id', VentaController.delete);

module.exports = router;


// Importar controladores
const VentaProductoController = require('./controllers/VentaProductoController');

// VentaProducto
router.post('/ventapro', VentaProductoController.create);
router.get('/ventapro/getByName/:name', VentaProductoController.showByKeyWord);
router.get('/ventapro/prod', VentaProductoController.show);
router.get('/ventapro/:id', VentaProductoController.showById);
router.patch('/ventapro/:id', VentaProductoController.update);
router.delete('/ventapro/:id', VentaProductoController.delete);

module.exports = router;