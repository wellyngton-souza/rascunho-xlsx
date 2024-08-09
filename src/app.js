const express = require('express');
const app = express();

const router = express.Router();//Rotas
const index = require('./routes/index');
const xlsxRoute = require('./routes/xlsxRoute');

app.use('/', index);
app.use('/xlsx', xlsxRoute);

module.exports = app;