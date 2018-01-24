var quotes = require('../controllers/quotes.js');
var path = require('path');

module.exports = function(app){

    app.get('/quotes', function(req,res){
        quotes.viewAll(req, res);
    })

    app.post('/quotes', function(req,res){
        quotes.create(req, res);
    })
        
    app.get('/quotes/:id', function(req,res){
        quotes.viewOne(req, res);
    })

    app.patch('/quotes/:id', function(req,res){
        quotes.update(req, res);
    })

    app.delete('/quotes/:id',function(req, res){
        quotes.delete(req,res)
    })
    
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}