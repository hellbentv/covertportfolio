var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index')
var stocks = require('./routes/stocks')

var app = express();

//View Engine
app.set ('views', path.join(__dirname, "views"));
app.set ('view engine', 'ejs');
app.engine('html', require ('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', stocks);

app.listen(process.env.PORT, function(){
    console.log('Server started on port: '+process.env.PORT);
});
