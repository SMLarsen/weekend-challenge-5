var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================

// Get all warehouses
router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }

    client.query(
      'SELECT * FROM warehouse '+
      'JOIN warehouse_product ON warehouse.id = warehouse_product.warehouse_id '+
      'JOIN products ON products.id = warehouse_product.product_id',
      function (err, result) {
      if(err) {
        console.log(err);
        res.sendStatus(500);
      }
      console.log('Warehouse GET complete');
      res.send(result.rows);
    });
  });
});

module.exports = router;
