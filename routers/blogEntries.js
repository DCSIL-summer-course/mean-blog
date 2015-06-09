var express = require('express');
var router = express.Router();
var Entry = require('../models/entry');

router.get('/', function(req, res){
  Entry.all(function(err, entries){
    if (err){
      res.status(400).json(err);
    } else {
      res.json(entries);
    }
  });
});

router.get('/:id', function(req, res){
  // Insert code to fetch a single entry by id
  Entry.find(req.params.id, function(err, entry){
    if (err){
      res.status(400).json(err);
    } else {
      res.json(entry);
    }
  });
});

router.post('/', function(req, res){
  // Insert code to create a new blog post
  Entry.create(req.body, function(err, entry){
    if (err){
      res.status(400).json(err);
    } else {
      res.json(entry);
    }
  });
});

router.put('/:id', function(req, res){
  // Insert code to update a single entry by id
  var entry = req.body;
  entry.updatedAt = Date.now();

  Entry.update(req.params.id, entry, function(err, e){
    if (err){
      res.status(400).json(err);
    } else {
      res.json(e);
    }
  });
});

router.delete('/:id', function(req, res){
  // Insert code to delete a single entry
  Entry.delete(req.params.id, function(err, entry){
    if (err){
      res.status(400).json(err);
    } else {
      res.json(entry);
    }
  });
});

module.exports = router;