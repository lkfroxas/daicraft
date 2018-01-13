var express = require('express');
var router = express.Router();
var db = require('../db/sqlConn');

/* GET material data */
router.get('/', function(req, res, next) {
  console.log('bye');
  db.get().query(`CALL dcsp_GetMaterials(${req.query.tier}, ${req.query.materialTypeId}, ${req.query.propertyId})`, function(err, data) {
    res.json(data[0]);
  });
});

module.exports = router;
