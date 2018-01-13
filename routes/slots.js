var express = require('express');
var router = express.Router();
var db = require('../db/sqlConn');

/* GET slot data */
router.get('/', function(req, res, next) {
  console.log('bye');
  db.get().query(`CALL dcsp_GetSchematicSlots(${req.query.schematicId})`, function(err, data) {
    res.json(data[0]);
  });
});

module.exports = router;
