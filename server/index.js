var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/endpoint', function(req, res){
    res.header('Content-type','application/json');
    res.header('Charset','utf8');
    res.send(req.query.callback + '('+ JSON.stringify(true) + ');');
});

app.listen(process.env.Port || 3000);