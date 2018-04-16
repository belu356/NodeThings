var express = require('express'),
    mongoose = require('mongoose');


var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res){
        Book.find(function(err, books){
            if (err)
            console.log(err)
            else
            res.json(books);
    });
});
//---------------------------------
    /*bookRouter.route('/')
    .post(function(req, res){
        var book = new Book (req.body);

        book.save();

        res.status(201).send(book)
    });*/


//nice try gila 
//--------------------------------------

app.use('/api', bookRouter);



app.get('/', function(req, res){
    res.send('Ola ke ase!');
});

app.listen(port, function(){
    console.log('Gulp running on  PORT: ' + port);
});

