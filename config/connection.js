var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Fthefed22',
	database: 'burgers_db'
});

module.exports = connection;


//////////////
/*  Once finished with functionality,
	the following is for the jawsDB setup
*/