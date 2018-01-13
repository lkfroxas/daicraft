var express = require('express');
var router = express.Router();
var db = require('../db/sqlConn');

/* GET schematic data */
router.get('/:id', function(req, res) {
  console.log("hi" + req.params.id);
  db.get().query(`SELECT * FROM Schematic WHERE SchematicId = ${req.params.id}`, function(err, data) {
    res.json(data);
  });
});

/* GET schematic list */
router.get('/', function(req, res, next) {
  console.log('bye');
  db.get().query(`CALL dcsp_GetSchematics(${req.query.schematicTypeId})`, function(err, data) {
    res.json(data[0]);
  });
});

module.exports = router;
