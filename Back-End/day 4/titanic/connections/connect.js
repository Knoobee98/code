//connect to database
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'mysql-container2',
    user: 'root',
    password: 'abc123',
    database: 'jcwd_2302',
    port: 3306
});

db.connect((err) => {
    if (err) return console.log('error ' + err.message);

    console.log('Connected to Database');
})

module.exports = db;