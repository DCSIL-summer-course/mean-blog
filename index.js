var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Routers
var blogEntries = require('./routers/blogEntries.js');

app.use('/api/blog-entries', blogEntries);

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});


// Start server
app.listen(PORT, function(){
  console.log('server has started.');
});