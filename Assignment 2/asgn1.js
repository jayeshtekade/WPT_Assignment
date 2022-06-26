const mysql = require('mysql2');

let dbobject = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'work',
    port: 3306
}

const connection = mysql.createConnection(dbobject);

console.log("Connection Successful!! Enjoy.....");