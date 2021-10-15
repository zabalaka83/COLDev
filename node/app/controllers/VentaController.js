const {Venta} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Venta.create(
            req.body
        ).then(Venta => {
            res.json(Venta);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Venta.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.name}%`
                }

            }
        }).then(Ventas => {
            res.json(Ventas);
        });
    },
    

    // INDEX /api/productos
    show(req, res) {
        console.log('entro');
        Venta.findAll().then(ventas => {
            res.json(ventas);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Venta.findByPk(req.params.id).then(Ventas => {
            res.json(Ventas);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Venta.update({
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
        Venta.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




