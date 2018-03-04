// var mysql = require('mysql');
//
// var connection = null;
//
// exports.connect = function(cb) {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'craftclient',
//     password: 'craft92!23',
//     database: 'dcdb'
//   });
//   cb();
// };
//
// exports.get = function() {
//   return connection;
// };

exports.url = (process.env.MONGODB_URI || "mongodb://localhost:27017/dcdb");
