var orm = require('../config/orm.js');
var tableInput = "burgers";

var burger = {
  selectAll: function (cb) {
    orm.selectAll(tableInput, function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, valOfCols, cb) {
    orm.insertOne(tableInput, cols, valOfCols, function (res) {
      cb(res);
    });
  },
  
  updateOne: function (condition, objVals, cb) {
    orm.updateOne(tableInput, condition, objVals, function (res) {
      cb(res);
    });
  },

  deleteOne: function (condition, cb) {
    orm.deleteOne(tableInput, condition, function(res){
      cb(res);
    });
  }

};

module.exports = burger;
