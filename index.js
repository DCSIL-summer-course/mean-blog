var express = require('express');
var app = express();
var PORT = 5000;

app.get('/', function(req, res){
  res.send('Hello World');
});

// Micro-apps
var blogs = require('./microapps/blogs.js');

app.use('/api/blogs', blogs);


// Start server
app.listen(PORT, function(){
  console.log('server has started.');
});