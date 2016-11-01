var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fthefed22',
    database: 'burgers_db'
    });
};

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected as ID '+connection.threadId);
});

module.exports = connection;


//////////////
/*  Once finished with functionality,
	the following is for the jawsDB setup
*/