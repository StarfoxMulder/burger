var orm = require('./config/orm.js');

//code that will call the orm functions using burger specific
//	input for the orm
var bInput {
	selectAll: function (/*tableInput, col, valOfCol,*/ cb) {
		orm.selectAll('', function(res) {
			cb(res);
		});
	},

	insertOne: function (/*tableInput, col, valOfCol,*/ cb) {
		orm.selectAll('', function(res) {
			cb(res);
		});
	},

	updateOne: function (/*tableInput, col, valOfCol,*/ cb) {
		orm.selectAll('', function(res) {
			cb(res);
		});
	}
};

module.exports = bInput;