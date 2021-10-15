const {Clientes} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Clientes.create(
            req.body
        ).then(Cliente => {
            res.json(Cliente );
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Clientes.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.cedula}%`
                }

            }
        }).then(Cliente => {
            res.json(Cliente);
        });
    },
    

    // INDEX /api/productos
    show(req, res) {
        console.log('entro');
        Clientes.findAll().then(cliente => {
            res.json(cliente);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Clientes.findByPk(req.params.id).then(Cliente => {
            res.json(Cliente);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Clientes.update({
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
        Clientes.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




