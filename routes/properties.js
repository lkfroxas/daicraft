var express = require('express');
var router = express.Router();
var dcdb = require('../db/sqlConn');
var MongoClient = require('mongodb').MongoClient;

/* GET property data */
router.get('/', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('materials');
    collection.find({
      tier: parseInt(req.query.tier),
      type: req.query.materialType,
      "properties.type": req.query.slotType
    }).project({
      _id: 0,
      "properties.$": 1
    }).sort({
      "properties.property": 1
    }).toArray(function(err, properties) {
      res.json([...new Set(properties.map(obj => obj.properties[0].property))]);
      database.close();
    });
  });
});

module.exports = router;
