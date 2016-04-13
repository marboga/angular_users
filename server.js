var express = require('express');
var app = express();
app.use(express.static(__dirname + "static"));

app.get('/', function(req, res) {
	res.render('users')
})

app.listen(8000, function(){
	console.log('listening on 8k');
})
