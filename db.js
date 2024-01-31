const { Pool} = require("pg");

const pool = new Pool({
    user: 'postgres',
    password: '456vfr*/', //alterar para a senha local do postgres
    host: 'localhost',
    port: 5432,
    database:'sgerenciamento'
});

module.exports = {
    query: (text,params) => pool.query(text,params)
};