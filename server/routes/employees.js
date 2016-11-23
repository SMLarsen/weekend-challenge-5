var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================

// Route: get employees
router.get('/', function(req, res) {

    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }
        client.query('SELECT * FROM employees',
            function(err, result) {
                done(); // close the connection.

                if (err) {
                    console.log('select employees query error: ', err);
                    res.sendStatus(500);
                }
                res.send(result.rows);
            });
    });
}); // end Route: get employees


module.exports = router;
