var express = require('express')
var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){
    res.sendFile('./index.html', {root:'./'});
});

app.listen(8080)