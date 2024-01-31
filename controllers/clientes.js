const db = require("../db");

async function getClients(req, res){
    try{
        const results = await db.query('SELECT * FROM clientes');
        res.json(results.rows);
    } catch (err){
        res.status(500).send(err.message);
    }
};

async function postClients(req,res){
    try{
        const results = await db.query(`INSERT INTO clientes (nome, email, telefone, x_coord, y_coord)
        VALUES ('${req.body.nome}','${req.body.email}','${req.body.telefone}',${req.body.x_coord},${req.body.y_coord})`);
        res.send('Sucesso no Cadastro')
    } catch(err){
        res.status(401).send(`Erro ao cadastrar: ${ err.message}`);
    }

};

module.exports = {
    getClients,
    postClients
};