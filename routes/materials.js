var express = require('express');
var router = express.Router();
var dcdb = require('../db/dbConn');
var dbName = dcdb.url.substr(dcdb.url.lastIndexOf('/') + 1);
var MongoClient = require('mongodb').MongoClient;

/* GET material data */
router.get('/', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db(dbName);
    var collection = db.collection('materials');
    collection.find({
      tier: parseInt(req.query.tier),
      type: req.query.materialType,
      "properties.property": req.query.property
    }).project({
      _id: 0,
      name: 1
    }).sort({
      name: 1
    }).toArray(function(err, materials) {
      res.json(materials.map(material => material.name));
      database.close();
    });
  });
});

module.exports = router;
