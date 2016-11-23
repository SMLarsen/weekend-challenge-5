var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================

// Route: get cutomers
router.get('/', function(req, res) {

    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }
        client.query('SELECT customers.first_name, customers.last_name, ' +
            'COUNT(orders.id) FROM customers ' +
            'LEFT JOIN addresses ON customers.id = addresses.customer_id ' +
            'LEFT JOIN orders ON orders.address_id = addresses.id GROUP BY customers.id',
            function(err, result) {
                done(); // close the connection.

                if (err) {
                    console.log('select customer query error: ', err);
                    res.sendStatus(500);
                }
                res.send(result.rows);
            });
    });
}); // end Route: get customers


module.exports = router;
