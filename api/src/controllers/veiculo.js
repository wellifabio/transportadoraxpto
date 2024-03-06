const con = require('../connection/mysql');

//CRUD - CREATE
const addVeiculo = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.capacidade != null) {
        const { placa, modelo, capacidade } = req.body;
        con.query('INSERT INTO veiculo (placa, modelo, capacidade) VALUES (?, ?, ?, ?)', [placa, modelo, capacidade], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

module.exports = {
    addVeiculo
}
