const {ProductoPendiente} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        ProductoPendiente.create(
            req.body
        ).then(ProductoPendiente => {
            res.json(ProductoPendiente);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        ProductoPendiente.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.name}%`
                }

            }
        }).then(ProductoPendientes => {
            res.json(ProductoPendientes);
        });
    },
    

    // INDEX /api/productos
    show(req, res) {
        console.log('entro');
        ProductoPendiente.findAll().then(productoPendientes => {
            res.json(productoPendientes);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        ProductoPendiente.findByPk(req.params.id).then(ProductoPendientes => {
            res.json(ProductoPendientes);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        ProductoPendiente.update({
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
        ProductoPendiente.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




