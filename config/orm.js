var connection = require('./connection.js');

var orm = {

// These are the methods to retrieve and store data in SQL database.
// 'selectALL()'
	displayAll: function(tableInput, col, valOfCol) {
		var queryString = 'SELECT * FROM '+tableInput+' WHERE '+col+' =?';
		connection.query(queryString, [valOfCol], function(err, res) {
			if(err) throw err;
			res.render('index', {burgers : res});
		});
	}
// 'insertOne()'

// 'updateOne()'

};

module.exports = orm;

// app.get('/', function(req, res){
// 	connection.query('SELECT * FROM quotes;', function(err, data){
// 		if(err) throw err;
// 		res.render('index', {quotes : data});
// 	});
// });

// app.delete('/delete', function(req, res) {
// 	connection.query('DELETE FROM quotes WHERE id = ?', [req.body.id], function(err, data){
// 		if(err) throw err;
// 		res.redirect('/');
// 	});
// });

// app.post('/create', function(req, res) {
// 	connection.query('INSERT INTO quotes (author, quote) VALUES (?, ?)', [req.body.author, req.body.quote], function(err, data){
// 		if(err) throw err;
// 		res.redirect('/');
// 	});
// });

// app.get('/quotes/:id', function(req, res) {
// 	connection.query('SELECT * FROM quotes WHERE id = ?', [req.params.id], function(err, data){
// 		if(err) throw err;
// 		res.render('single_quote', data[0]);
// 	});
// });


// app.post('/update/:id', function(req, res) {
// 	connection.query('UPDATE quotes (author, quote, id) VALUES (?, ?, ?)', [req.body.author, req.body.quote, req.params.id], function(err, data){
// 		if(err) throw err;
// 		res.redirect('/');
// 	});
// });

//////// ORM Attempt Two /////////
var connection = require('../config/connection.js');

var orm = {
// These are the methods to retrieve and store data in SQL database.
	selectAll: function (tableInput, col, valOfCol, cb) {
		var queryString = 'SELECT * FROM '+tableInput+' WHERE '+col+' =?';
		connection.query(queryString, [valOfCol], function(err, res) {
			if(err) throw err;
			cb(result)
		});
	}
// 'insertOne()'
	insertOne: function (tableInput, col, valOfCol, cb) {
		
	}

// 'updateOne()'

};

module.exports = orm;
