var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================
router.get('/', function(req, res) {
  console.log('Orders get request received');
  //Get orders from database
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log("Error connecting to the database during get orders request");
      res.sendStatus(500);
    }
    client.query('SELECT * FROM customers JOIN addresses ON ' +
    'addresses.customer_id=customers.id JOIN orders ON ' +
    'addresses.id=orders.address_id JOIN line_items ON ' +
    'orders.id=line_items.order_id JOIN products ON ' +
    'line_items.product_id=products.id', function(err, result) {
      done();
      if(err) {
        console.log("Query error during get reqeust for orders: ", err);
        res.sendStatus(500)
      } else {
        res.send(result.rows);
      }
    });//end query
  });//end connect
});//end route


module.exports = router;
