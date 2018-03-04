var express = require('express');
var router = express.Router();
var dcdb = require('../db/dbConn');
var dbName = dcdb.url.substr(dcdb.url.lastIndexOf('/') + 1);
var MongoClient = require('mongodb').MongoClient;

/* GET schematic types */
router.get('/', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db(dbName);
    var collection = db.collection('schematics');
    collection.distinct('type', function(err, schemTypes) {
      res.json(schemTypes);
      database.close();
    });
  });
});

module.exports = router;
