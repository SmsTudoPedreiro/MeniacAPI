var express = require('express');
var app = express();

var mongojs = require('mongojs');
var database_url = process.env.MONGOLAB_URI || 'mongodb://localhost/demo_database';
var collections = ['criminalminds'];
var db = mongojs(database_url, collections, {authMechanism: 'ScramSHA1'});

app.set('port', (process.env.PORT || 3000));

app.get('/', function (request, response) {

  db.criminalminds.find(function (err, docs) {
    console.log(docs);
    response.json(docs);
  });
});

app.listen(app.get('port'), function () {
  console.log('Example app listening at http://0.0.0.0:%s', app.get('port'));
});
