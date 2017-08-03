const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const routes = require('./router');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static('public'));

app.use(function(req, res, next){
  MongoClient.connect('mongodb://localhost:27017/robots', (error, db)=>{
    req.db = db;
    next();
  });
});

app.get('/', function(req, res){
  res.redirect('/robots/');//data.users
});

routes(app);

app.listen(3000, function(){
  console.log('Listening...');
});
