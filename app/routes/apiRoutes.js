var express = require('express');
var router = express.Router();
var port = process.env.PORT || 8080;

router.get('/', function(req, res) {
	res.send('Good morning! The API is at http://localhost:' + port + '/api');
});

router.get('/deeper', function(req, res){
	res.send('4 + 1234');
});

module.exports = router;