var mongoose = require('mongoose');
var MovieDetailsSchema = mongoose.Schema({
  Title: String,
  Year: String,
  Released: String,
  Runtime:String,
  Director: String,
  Actors:String,
  Language:String,
  Country:String,
  Awards:String,
  Type:String,
  Poster:String,
  Response:String
});

module.exports = mongoose.model("mov", MovieDetailsSchema);
