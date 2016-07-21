var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
const url=require('url');
var User = require('../movieschema');
var movie = require('node-movie');
//mongoose.connect('mongodb://localhost/movies')
var db = mongoose.connection;
/* GET home page. */
var fdata={};
router.post('/add',function(req, res){
  var fname=req.body.name;
  var url="http://www.omdbapi.com/?t="+fname+"&y=&plot=short&r=json";
  console.log(url);
  request(url,function(err,resp,data){
    data=JSON.parse(data);
    console.log(data);
    var movie= new User(data);
    movie.save(function (err) {
      if (err) res.send(err);
      res.send("Movie Inserted!");
    });
  });
});
router.get('/showall', function (req, res){
User.find(function(err, data){
  if (err) res.send(err);
res.send(data);
});
});

//update
router.put('/:id', function(req, res) {
  User.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Movie id not exist, not able to update");
    }
      for(i in req.body) {
      movie[i] = req.body[i];
    }
    //save
    movie.save(function(err) {
      if(err) {
        return res.send("not able to save");
      }

      res.send(movie);
    });
  });
});

router.delete('/delete',function(req,res){
  User.remove({'Title':req.body.name},function(err,data){
    if(err)
    res.send(err);
    res.send('deleted');
  });
});
module.exports = router;
