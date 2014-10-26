var ebola = require('ebola-outbreak');
var express = require('express');
var api = express();

// CORS stuff
api.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
});

// Get cases
api.get('/cases', function(req, res){

  res.removeHeader('X-Powered-By')

  if (req.query.project) {

    ebola.project(req.query.project, function(err, output){
      if (err) throw err
      res.type('json');
      res.send(JSON.stringify(output,null,4));
    })

  } else {

    ebola.cases(function(err, output){
      if (err) throw err
      res.type('json');
      res.send(JSON.stringify(output,null,4));
    })

  }

});

// Catch all
api.all('*', function(req, res, next){
  res.type('text');
  res.status(404).send('Wrong path, use /cases');
});

api.listen(3333);
console.log('api listening on 3333');
