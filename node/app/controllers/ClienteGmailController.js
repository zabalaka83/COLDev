const { ClienteGmail } = require('../models/index');
const Sequelize = require('sequelize');
const clientegmail = require('../models/clientegmail');


module.exports = {

   /*  async create(req, res) {
        console.log('req', req);

        try {
            var response = ''
            response = await User.findAll({
                where: { email: req.body.email },
                include: [{
                    model: ClienteGmail
                }]
            });

            if (response.length === 0) {
                let userCreated = await User.create(
                    {
                        firstName: req.body.name,
                        lastName: req.body.lastname,
                        email: req.body.email
                    }
                );
                res.json(userCreated);
                return;
            }
            console.log('response user exist', response[0].dataValues);
            res.json({ user: response[0].dataValues });

        } catch (error) {
            console.log('error', error);
        }

    } */
    create(req, res) {
        console.log('req', req.body);
        ClienteGmail.create(
            req.body
        ).then(Clientegm => {
            res.json(Clientegm );
        })
    },

    async show(req, res) {
        try {
            var response = ''
            const Op = Sequelize.Op;
            response = await ClienteGmail.findAll();

            res.json(usersWithoutRole);

        } catch (error) {
            res.json(response);
        }
    }


}
