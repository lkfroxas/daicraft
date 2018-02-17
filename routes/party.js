var express = require('express');
var router = express.Router();
var dcdb = require('../db/sqlConn');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

router.get('/:id', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('party');
    collection.find({
      "_id": ObjectId(req.params.id)
    }).project({
      _id: 0,
      gear: 1
    }).toArray(function(err, results) {
      var item = results[0].gear.find(equip => equip.type === req.query.type);
      var foundName = item.names.filter(name => name.tier === parseInt(req.query.tier));
      res.json(foundName);
      database.close();
    });
  });
});

/* GET party data */
router.get('/', function(req, res, next) {
  MongoClient.connect(dcdb.url, function(err, database) {
    var db = database.db('dcdb');
    var collection = db.collection('party');
    collection.find({
      "gear.type": req.query.type
    }).project({
      name: 1
    }).sort({
      name: 1
    }).toArray(function(err, partyMembers) {
      res.json(partyMembers);
      database.close();
    });
  });
});

module.exports = router;
