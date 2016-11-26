var express = require('express');
var app = express();
// var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var employees = require('./routes/employees');
var budgets = require('./routes/budgets');
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // needed by Angular

app.use('/employees', employees);
app.use('/budgets', budgets);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));

app.listen(PORT, function() {
  console.log("listening on port: ", PORT);
});
