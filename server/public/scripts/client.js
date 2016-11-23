var app = angular.module('warehouseApp', ['ngRoute']);

app.filter('unique', function() {

 return function (arr, field) {
   var o = {}, i, l = arr.length, r = [];
   for(i=0; i<l;i+=1) {
     o[arr[i][field]] = arr[i];
   }
   for(i in o) {
     r.push(o[i]);
   }
   return r;
 };
})

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/customers', {
            templateUrl: '/views/template/customers.html',
            controller: 'CustomersController',
            controllerAs: 'customers'
        })
        .when('/warehouses', {
            templateUrl: '/views/template/warehouses.html',
            controller: 'WarehousesController',
            controllerAs: 'warehouses'
        })
        .when('/orders', {
            templateUrl: '/views/template/orders.html',
            controller: 'OrdersController',
            controllerAs: 'orders'
        })
        .when('/on-hand', {
            templateUrl: '/views/template/on-hand.html',
            controller: 'OnHandController',
            controllerAs: 'onHand'
        })
        .otherwise({
            redirectTo: 'customers'
        });

}]);

app.controller('CustomersController', ["$http", "uniqueFilter", function($http, uniqueFilter) {
    console.log('Customers controller running');
    var self = this;

      self.customers = [];

      getCustomers();

      // read only
      function getCustomers() {
        $http.get('/customers')
          .then(function(response) {
            self.customers = response.data;
            // console.log(self.customers);
          });
      }

    self.message = "Customers controller is the best!";

}]);

app.controller('WarehousesController', ['$http', function($http) {
    console.log('Warehouses controller running');
    var self = this;
    self.data = [];

    getWarehouses();

    // Get warehouses
    function getWarehouses() {
      $http.get('/warehouses')
        .then(function (response) {
          self.data = response.data;
        }, function (error) {
          console.log(error);
        });
    }
}]);

//orders controller
app.controller('OrdersController', ['$http', function($http) {
  var self = this;
  self.orders = [];
  getOrders();

    console.log('Orders controller running');
    var self = this;
    self.message = "Orders controller is the best!";

    function getOrders() {
      $http.get('/orders')
        .then(function(response) {
          self.orders = response.data
          console.log(self.orders);
        });
    }
}]);

app.controller('OnHandController', ["$http", function($http) {
    console.log('On hand controller running');
    var self = this;

    getProductOnHand();

    // Get product on hand
    function getProductOnHand() {
      $http.get('/onHand')
        .then(function (response) {
          self.products = response.data;
          console.log(self.products);
        }, function (error) {
          console.log(error);
        });
    }

    self.message = "On hand controller is the best!";
}]);
