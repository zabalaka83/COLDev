const {Rol} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Rol.create(
            req.body
        ).then(Rol => {
            res.json(Rol);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Rol.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.name}%`
                }

            }
        }).then(Rols => {
            res.json(Rols);
        });
    },
    

    // INDEX /api/productos
    show(req, res) {
        console.log('entro');
        Rol.findAll().then(rols => {
            res.json(rols);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Rol.findByPk(req.params.id).then(Rols => {
            res.json(Rols);
        })
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Rol.update({
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
        Rol.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




