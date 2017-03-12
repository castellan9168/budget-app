// modules =============================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./app/models/user'); //get the user model
var config = require('./config/db'); // configuration
var port = process.env.PORT || 8080; // set our port
var jwt = require('jwt-simple');

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//log to console
app.use(morgan('dev'));

//use the passport package in our application
app.use(passport.initialize());
//pass passport for configuration
require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	if (req.method === 'OPTIONS') {
		res.end();
	} else {
		next();
	}
});

mongoose.connect(config.database);

//routes
app.use('/', require('./app/routes/apiRoutes'));
app.use('/api/authentication', require('./app/routes/authentication'));
app.use('/api/main', require('./app/routes/main'));

// startup our app at http://localhost:8080
app.listen(port);                     
console.log('Application started on port ' + port); // shoutout to the user
	
// expose app
exports = module.exports = app;