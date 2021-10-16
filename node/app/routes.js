const express = require('express');
const router = express.Router();

// Importar controladores
const EmpleadoController = require('./controllers/EmpleadoController');
const RolController = require('./controllers/RolController');
const ProductoController = require('./controllers/ProductoController');
const ClienteController = require('./controllers/ClienteController');
const ProductoPendienteController = require('./controllers/ProductoPendienteController');
const VentaController = require('./controllers/VentaController');
const VentaProductoController = require('./controllers/VentaProductoController');
const ClienteGmailController = require('./controllers/ClienteGmailController');


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

// Producto
router.post('/pro', ProductoController.create);
router.get('/pro/getByName/:name', ProductoController.showByKeyWord);
router.get('/pro/prod', ProductoController.showAll);
router.get('/pro/:id', ProductoController.showById);
router.patch('/pro/:id', ProductoController.update);
router.delete('/pro/:id', ProductoController.delete);

// Cliente
router.post('/cliente', ClienteController.create);
router.get('/cliente/getByName/:name', ClienteController.showByKeyWord);
router.get('/cliente/clie', ClienteController.show);
router.get('/cliente/:id', ClienteController.showById);
router.patch('/cliente/:id', ClienteController.update);
router.delete('/cliente/:id', ClienteController.delete);

// ProductoPendiente
router.post('/propen', ProductoPendienteController.create);
router.get('/propen/getByName/:name', ProductoPendienteController.showByKeyWord);
router.get('/propen/pro', ProductoPendienteController.show);
router.get('/propen/:id', ProductoPendienteController.showById);
router.patch('/propen/:id', ProductoPendienteController.update);
router.delete('/propen/:id', ProductoPendienteController.delete);


// Venta
router.post('/venta', VentaController.create);
router.get('/venta/pro', VentaController.show);
router.get('/venta/:id', VentaController.showById);
router.patch('/venta/:id', VentaController.update);
router.delete('venta//:id', VentaController.delete);





// VentaProducto
router.post('/ventapro', VentaProductoController.create);
router.get('/ventapro/getByName/:name', VentaProductoController.showByKeyWord);
router.get('/ventapro/prod', VentaProductoController.show);
router.get('/ventapro/:id', VentaProductoController.showById);
router.patch('/ventapro/:id', VentaProductoController.update);
router.delete('/ventapro/:id', VentaProductoController.delete);




// VentaProducto
router.post('/clientegm', ClienteGmailController.create);
router.get('/clientegm/cliente', ClienteGmailController.show);

module.exports = router;