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
        client.query('SELECT * FROM employees ORDER BY last_name, first_name',
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

// Route: get employees monthly salary
router.get('/salary', function(req, res) {
    // console.log('Getting sum of salaries');
    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }
        client.query('SELECT SUM(salary) / 12 AS monthly_salaries FROM employees',
            function(err, result) {
                done(); // close the connection.

                if (err) {
                    console.log('sum salary query error: ', err);
                    res.sendStatus(500);
                }
                // console.log(result.rows);
                res.send(result.rows);
            });
    });
}); // end Route: get employees monthly salary

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

// Route: delete employee
router.delete('/:id', function(req, res) {
  console.log('starting delete');
  var id = req.params.id;
  console.log(id);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'DELETE FROM employees WHERE id = $1',
      [id],
      function(err, result) {
        done();

        if(err) {
          console.log('delete query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });
}); // end Route: delete employee

// Route: update status - update
router.put('/status/:id/:status', function(req, res) {
  id = req.params.id;
  status = req.params.status;

  console.log('employee to update ', id, status);

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'UPDATE employees SET status = $1 WHERE id = $2',
      [status, id],
      function(err, result) {
        if(err) {
          console.log('status update error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }); // close connect
}); // end update status route

module.exports = router;
