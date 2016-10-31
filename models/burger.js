var orm = require('../config/orm.js');
var tableInput = "burgers";

var burger = {
  selectAll: function (cb) {
    orm.selectAll(tableInput, function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne(tableInput, cols, vals, function (res) {
      cb(res);
    });
  },
  
  updateOne: function (objVals, condition, cb) {
    orm.updateOne(tableInput, objVals, condition, function (res) {
      cb(res);
    });
  },

  delete: function (condition, cb) {
    orm.delete(tableInput, condition, function(res){
      cb(res);
    });
  }

};

module.exports = burger;
