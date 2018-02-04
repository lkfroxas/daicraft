var express = require('express');
var router = express.Router();
var dcdb = require('../db/sqlConn');
var MongoClient = require('mongodb').MongoClient;

/* GET schematic types */
router.get('/', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('schematics');
    collection.distinct('type', function(err, schemTypes) {
      res.json(schemTypes);
      database.close();
    });
  });
});

module.exports = router;
