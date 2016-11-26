var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

//==================  Routes  ====================

// Route: get budgets
router.get('/', function(req, res) {

    pg.connect(connectionString, function(err, client, done) {
        if (err) {
            console.log('connection error: ', err);
            res.sendStatus(500);
        }
        client.query('SELECT * FROM budget ORDER BY year DESC, month DESC',
            function(err, result) {
                done(); // close the connection.

                if (err) {
                    console.log('select budget query error: ', err);
                    res.sendStatus(500);
                }
                res.send(result.rows);
            });
    });
}); // end Route: get budget

// Route: post budget
router.post('/', function(req, res) {
  console.log('starting post');
  var newBudget = req.body;
  console.log(newBudget);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'INSERT INTO budget (month, month_char, year, monthly_budget) ' +
      'VALUES ($1, $2, $3, $4)',
      [newBudget.month, newBudget.month_char, newBudget.year, newBudget.monthly_budget],
      function(err, result) {
        done();

        if(err) {
          console.log('insert budget query error: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  });
}); // end Route: add budget


// Route: getCurrentBudget
router.get('/:month/:year', function(req, res) {
  console.log('starting get current budget');
  var month = req.params.month;
  var year = req.params.year;
  console.log(month, year);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'SELECT  monthly_budget FROM budget WHERE month = $1 AND year = $2',
      [month, year],
      function(err, result) {
        done();

        if(err) {
          console.log('get curr budget query error: ', err);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
  });
}); // end Route: get currentBudget


module.exports = router;
