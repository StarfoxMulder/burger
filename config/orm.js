var connection = require('../config/connection.js');

//////// ORM Attempt Two /////////

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
};

function printQuestionMarks(num) {
  var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
};

var orm = {
// These are the methods to retrieve and store data in SQL database.
	selectAll: function (tableInput, cb) {
		var queryString = 'SELECT * FROM '+tableInput+';';

		connection.query(queryString, function (err, res) {
			if(err) throw err;
			cb(res);
		});
	},

	insertOne: function (tableInput, cols, valOfCols, cb) {
		var queryString = 'INSERT INTO ' + tableInput;

	    queryString = queryString + ' (';
	    queryString = queryString + cols.toString();
	    queryString = queryString + ') ';
	    queryString = queryString + 'VALUES (';
	    queryString = queryString + printQuestionMarks(valOfCols.length);
	    queryString = queryString + ') ';

		connection.query(queryString, valOfCols, function (err, res){
			if(err) throw err;
			cb(res);
		});
	},

	updateOne: function (tableInput, objVals, condition, cb) {
		var queryString = 'UPDATE '+tableInput+' SET ';

		queryString = queryString + objToSql(objVals);
		queryString = queryString +' WHERE ';
		queryString = queryString + condition;
		console.log(queryString);

		connection.query(queryString, function (err, res){
			if (err) throw err;
			cb(res);
		});
	},

	deleteOne: function (tableInput, condition, cb) {
	    var queryString = 'DELETE FROM ' + tableInput;
	    queryString = queryString + ' WHERE ';
	    queryString = queryString + condition;

	    console.log(queryString);
	    connection.query(queryString, function (err, res) {
	      if (err) throw err;
	      cb(res);
	    });
  	}
};

module.exports = orm;
