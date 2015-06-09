var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 5000;

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hello World');
});

// Routers
var blogEntries = require('./routers/blogEntries.js');

app.use('/api/blog-entries', blogEntries);


// Start server
app.listen(PORT, function(){
  console.log('server has started.');
});