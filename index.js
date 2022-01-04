const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');
const compression = require('compression');
const Usuario = require('./models/Usuario');
const path = require('path')

const app = express();

dbConnection();

app.use(express.json());
app.use(compression());
app.use(cors());


app.use(express.static(path.join(__dirname, '../client/build')))
app.use('/api/auth', require('./routes/auth'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

app.listen(9000, () => {
    console.log(`Servidor corriendo en el puerto 9000`);
})