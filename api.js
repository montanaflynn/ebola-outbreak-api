var ebola = require('ebola-outbreak');
var express = require('express');
var api = express();

// CORS and stuff
api.all('*', function(req, res, next){
  res.removeHeader('X-Powered-By')
  res.type('json');
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
});

// Get cases
api.get('/cases', function(req, res){
  ebola.cases(function(err, output){
    if (err) {
      res.status(500).send(buildError(err))
    }
    res.type('json');
    res.send(JSON.stringify(output,null,4));
  })
});

// Get projection
api.get('/project', function(req, res){
  var distance = req.query.distance || 1
  ebola.project(distance, function(err, output){
    if (err) {
      res.status(500).send(buildError(err))
    }
    res.send(JSON.stringify(output,null,4));
  })
});

// Get growth rate
api.get('/rate', function(req, res){
  ebola.rate(function(err, output){
    if (err) {
      res.status(500).send(buildError(err))
    }
    res.send(JSON.stringify({"rate" : output},null,4));
  })
});

// Catch all
api.all('*', function(req, res, next){
  res.type('text');
  res.status(404).send('Endpoint not found.');
});

api.listen(3333);
console.log('api listening on 3333');

function buildError(err) {
  return JSON.stringify({
    "error" : err
  })
}