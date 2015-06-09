var mongoose = require('mongoose');
var uriString = process.env.MONGOLAB_URI ||
                process.env.MONGOHQ_URL ||
                'mongodb://localhost/blog';

var EntrySchema = new mongoose.Schema({
  title : { type : String, required : true },
  body : String,
  createdAt : { type : Date, default : Date.now },
  updatedAt : { type : Date, default : Date.now },
  published : Boolean
});

var Entry;

function ModelActions(){
  mongoose.model('Entry', EntrySchema);
  Entry = mongoose.model('Entry');
  mongoose.connect(uriString);
  return ModelActions;
}

ModelActions.find = function(id, cb){
  Entry.findById(id).exec(cb);
};

ModelActions.create = function(entry, cb){
  var entry = new Entry(entry);

  entry.save(cb);
};

ModelActions.update = function(id, entry, cb){
  Entry.findByIdAndUpdate(id, {$set : entry}, cb);
};

ModelActions.delete = function(id, cb){
  Entry.findByIdAndRemove(id, cb);
};

ModelActions.all = function(cb){
  Entry.find({}, cb);
};

module.exports = ModelActions();