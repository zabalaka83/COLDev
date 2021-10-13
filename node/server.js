const express = require('express');
const app = express();
const { sequelize } = require('./models/index'); 

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./src/routes'));


app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log("Se ha establecido la conexión");
    })
});