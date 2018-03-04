var express = require('express');
var router = express.Router();
var dcdb = require('../db/dbConn');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

/* Get rune by id */
router.get('/:id', function(req, res) {
  console.log("Get rune by id: " + req.params.id);
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('runes');
    collection.find({
      "_id": ObjectId(req.params.id)
    }).toArray(function(err, rune) {
      res.json(rune[0]);
      database.close();
    });
  });
});

/* Get runes by tier and schematictype */
router.get('/', function(req, res) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('runes');
    collection.find({
      tier: parseInt(req.query.tier),
      schematicTypes: req.query.schematicType
    }).project({
      name: 1
    }).sort({
      name: 1
    }).toArray(function(err, runes) {
      res.json(runes);
      database.close();
    });
  });
});

module.exports = router;
