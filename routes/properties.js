var express = require('express');
var router = express.Router();
var db = require('../db/sqlConn');

/* GET property data */
router.get('/', function(req, res, next) {
  console.log('bye');
  db.get().query(`CALL dcsp_GetTierProperties(${req.query.tier}, ${req.query.slotTypeId}, ${req.query.materialTypeId})`, function(err, data) {
    res.json(data[0]);
  });
});

module.exports = router;
