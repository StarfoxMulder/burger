var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var connection = require('./config/connection.js');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//mysql connection would go here

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});


var port = 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});

// start of trial layout for using orm imports
var orm = require('./config/orm.js');

//displaying all 'undevoured' orders
app.get('/', orm.selectAll('burgers', 'devoured', 0));

//displaying all 'devoured' orders
orm.selectAll('burgers', 'devoured', 1);

// orm.insertOne();

// orm.updateOne();