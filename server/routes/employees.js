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

// Route: post employee
router.post('/', function(req, res) {
  console.log('starting post');
  var newEmployee = req.body;
  console.log(newEmployee);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'INSERT INTO employees (first_name, last_name, employee_id, salary, title, status) ' +
      'VALUES ($1, $2, $3, $4, $5, $6)',
      [newEmployee.first_name, newEmployee.last_name, newEmployee.employee_id, newEmployee.salary, newEmployee.title, newEmployee.status],
      function(err, result) {
        done();

        if(err) {
          console.log('insert query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });

  });

}); // end Route: add employee


module.exports = router;
