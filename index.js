const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');
const compression = require('compression');
const Usuario = require('./models/Usuario');

const app = express();

dbConnection();


app.use(compression());
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})