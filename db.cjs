const sql = require("mssql");

const config = {
    server: 'SATYA-KOLA\\SQLEXPRESS',
    database: 'master',
    user: 'demo1',
    password: 'NewPassword@123',

    options:{
        trustServerCertificate:true,
        encrypt:false
    }
};

module.exports = { sql, config };