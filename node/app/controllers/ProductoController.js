const {Productos} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Productos.create(
            req.body
        ).then(producto => {
            res.json(producto);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Productos.findAll({
            where: {
                //name: req.params.name

                nombre: {
                    [Op.like]: `%${req.params.nombre}%`
                }

            }
        }).then(productos => {
            res.json(productos);
        });
    },


    // INDEX /api/productos
    showAll(req, res) {
        console.log('entro');
        Productos.findAll().then(productos => {
            res.json(productos);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Productos.findByPk(req.params.id).then(productos => {
            res.json(productos);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Productos.update({
            nombre: req.body.nombre
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
       Productos.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




