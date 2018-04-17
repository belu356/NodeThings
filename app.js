var express = require('express'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true})); //bodyp loade, mira el body 
app.use(bodyParser.json()); //parsea a json

bookRouter = require('./routes/bookRoutes')(Book);



app.use('/api/books', bookRouter);
//app.use('/api/author', authorRouter);



app.get('/', function (req, res) {
    res.send('Ola ke ase!');
});


/*app.use(function(req, res, next){
    res.status(500).send("This route doesn't exist capo");
});*/


app.listen(port, function () {
    console.log('Gulp running on  PORT: ' + port);
});

