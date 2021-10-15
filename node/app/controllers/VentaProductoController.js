const {VentaProducto} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        VentaProducto.create(
            req.body
        ).then(VentaProducto => {
            res.json(VentaProducto);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        VentaProducto.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.name}%`
                }

            }
        }).then(VentaProductos => {
            res.json(VentaProductos);
        });
    },
    

    // INDEX /api/productos
    show(req, res) {
        console.log('entro');
        VentaProducto.findAll().then(ventaProductos => {
            res.json(ventaProductos);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        VentaProducto.findByPk(req.params.id).then(VentaProductos => {
            res.json(VentaProductos);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        VentaProducto.update({
            nombre: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });

    },


    // DELETE /api/producto/:id
    delete(req, res) {
        VentaProducto.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




