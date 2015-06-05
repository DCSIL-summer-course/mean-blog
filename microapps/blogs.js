var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var blogEntries = [
    {id: 1, title: 'First entry'},
    {id: 2, title: 'About bicycles'},
    {id: 3, title: 'React vs Angular?'}
  ];

  res.json({entries: blogEntries});
});

module.exports = router;