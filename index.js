const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');

config();

const app = express();

app.use(cors());

app.use(express.json());

const conn = require('./src/db/conn');

conn();

const routes = require('./src/routes/router');

app.use('/api', routes);

const port = process.env.PORT | 5000;

app.listen(port, function() {
  console.log(`Servidor is run in the port ${port}`)
});