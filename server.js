var express = require('express')
  , app = express()
  , server = require('http').createServer(app)

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index.jade');
});

server.listen(process.env.PORT || 8080);