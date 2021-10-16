const {Empleado} = require('../models/index');
const Sequelize = require('sequelize');
const empleado = require('../models/empleado');
const Op = Sequelize.Op;

module.exports = {

    // // CREATE
    create(req, res) {
        console.log('req', req.body);
        Empleado.create(
            req.body
        ).then(empleado => {
            res.json(empleado);
        })
    },


    // INDEX /api/productos
    showByKeyWord(req, res) {
        Empleado.findAll({
            where: {
                //name: req.params.name

                cedula: {
                    [Op.like]: `%${req.params.cedula}%`
                }

            }
        }).then(empleados => {
            res.json(empleados);
        });
    },


    // INDEX /api/productos
    showAll(req, res) {
        console.log('entro');
        Empleado.findAll({ include: 'rol' }).then(empleados => {
            res.json(empleados);
        })
    },


    // READ /api/posts/:id
    showById(req, res) {
        Empleado.findByPk(req.params.id).then(empleados => {
            res.json(empleados);
        })
    },

    // READ /api/posts/:id
    showByCedula(req, res) {
        console.log(req.body)
        Empleado.findOne({
            where: {
                cedula:  {
                    [Op.eq]: req.body.cedula
                }
            }
        }).then(empleado => {
            if(empleado !== null ){
                if(empleado.pass == req.body.pass){
                    res.json({error: '', empleado: empleado})
                } else res.json({error: "¡¡ Contraseña Incorecta !!"})
            } else res.json({error:"¡¡ El Usuario No Existe !!"})
        });
    },

    // // UPDATE /api/posts/:id
    update(req, res) {

        Empleado.update({
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
        Empleado.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




