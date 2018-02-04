var express = require('express');
var router = express.Router();
var dcdb = require('../db/sqlConn');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

/* GET schematic data */
router.get('/:id', function(req, res) {
  console.log("Get schematic by id: " + req.params.id);
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('schematics');
    collection.find({
      "_id": ObjectId(req.params.id)
    }).toArray(function(err, schematic) {
      res.json(schematic[0]);
      database.close();
    });
  });
});

/* GET schematic list */
router.get('/', function(req, res) {
  console.log('Get schematic list');
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('schematics');
    collection.find({
      type: req.query.schematicType
    }).project({
      name: 1
    }).sort({
      name: 1
    }).toArray(function(err, schematics) {
      res.json(schematics);
      database.close();
    });
  });
});

module.exports = router;
