var express = require('express');
var router = express.Router();
var db = require('../db/sqlConn');

/* GET schematic types */
router.get('/', function(req, res, next) {
  db.get().query('CALL dcsp_GetSchematicTypes', function(err, data) {
    res.json(data[0]);
  });
});

module.exports = router;
