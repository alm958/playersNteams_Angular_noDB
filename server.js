var express = require('express'),
    app = express(),
    path = require('path'),
    port = 8800,
    bodyParser = require('body-parser');

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./client/index.html'));
});

app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'./bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.listen(port, function(){
    console.log('Listening on port', port);
})
