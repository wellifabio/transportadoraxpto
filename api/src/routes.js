const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Veiculo = require('./controllers/veiculo');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);

module.exports = routes;