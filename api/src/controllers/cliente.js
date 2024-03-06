const con = require('../connection/mysql');

//CRUD - CREATE
const addCliente = (req, res) => {
    try {
        const { nome, endereco, telefone, email } = req.body;
        con.query('INSERT INTO cliente (nome, endereco, telefone, email) VALUES (?, ?, ?, ?)', [nome, endereco, telefone, email], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao adicionar cliente');
            }
            res.status(201).send('Cliente adicionado com sucesso');
        });
    } catch (error) {
        res.status(500).send('Erro ao adicionar cliente');
    }
}

//CRUD - READ
const getClientes = (req, res) => {
    con.query('SELECT * FROM cliente', (err, result) => {
        if (err) {
            res.status(500).send('Erro ao listar clientes');
        }
        res.json(result);
    });
}

module.exports = {
    addCliente,
    getClientes
}