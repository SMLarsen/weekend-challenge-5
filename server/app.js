var express = require('express');
var app = express();
// var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var customers = require('./routes/customers');
var orders = require('./routes/orders');
var warehouses = require('./routes/warehouses');
var onhand = require('./routes/onhand');
var PORT = 3000;


app.use('/customers', customers);

app.use('/warehouses', warehouses);
app.use('/onhand', onhand);

app.use('/orders', orders);



app.get('/', function (req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));

app.listen(PORT, function() {
  console.log("listening on port: ", PORT);
});
