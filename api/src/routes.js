const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Veiculo = require('./controllers/veiculo');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);

routes.post('/veiculos', Veiculo.addVeiculo);

module.exports = routes;