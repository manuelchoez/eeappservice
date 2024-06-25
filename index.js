const express = require('express');
require('dotenv').config();

const app = express();

//database
const { dbConnection } = require('./src/database/config.js');
dbConnection();

//directorio publico
app.use(express.static('./src/public'));

//lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/intelligence', require('./src/routes/intelligence'));



app.listen(process.env.PORT, () => { console.log('Server is running on port 4000'); });
