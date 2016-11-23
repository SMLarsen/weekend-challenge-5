var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================

// Route: get product on hand
router.get('/', function(req, res) {

    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }
        client.query('SELECT products.description, products.unit_price, sum(warehouse_product.on_hand) AS product_on_hand' +
        ' FROM products JOIN warehouse_product ON products.id = warehouse_product.product_id GROUP BY products.id',
            function(err, result) {
                done(); // close the connection.

                if (err) {
                    console.log('select customer query error: ', err);
                    res.sendStatus(500);
                }
                res.send(result.rows);
            });
    });
}); // end Route: get product on hand


module.exports = router;
