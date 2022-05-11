const mysql = require('mysql');

//koneksi database
const koneksi = mysql.createConnection({
    host: 'kenalkoding.com',
    user: 'u1685809_iqbalsyahrulsiddiq',
    password:'Persibbandung1933',
    database: 'u1685809_nodejs_restfull',
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;