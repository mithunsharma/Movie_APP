var sinon=require('sinon');
//var should=require('chai').should();
//expect = require("chai").expect;
supertest=require('supertest');
var model=require('../movieschema');
var modelStub=sinon.stub(model,'find');
//var app=require('../bin/www');
var url=supertest("localhost:8080");

describe('controller',function(){
  beforeEach(function(){
    modelStub.yields(null,{'Title':'King Kong','Year':2012});
  });

describe("Testing the Index Route ",function(){
  it("Should handle showall method",function(done){
    url
      .get("/showall")
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function(err,res){
        if(err)return done(err);
        console.log(res.body);
        done();
      });
  });
});
});
