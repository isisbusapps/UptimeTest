var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/endpoint', function(req, res){
    res.header('Content-type','application/json');
    res.header('Charset','utf8');
    res.send(req.query.callback + '({"success":'+ JSON.stringify(true) + '});');
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT || 3000);