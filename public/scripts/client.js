var app = angular.module('employeeApp', ['ngRoute']);

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
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employees', {
            templateUrl: '/views/template/employee.html',
            controller: 'EmployeesController',
            controllerAs: 'employees'
        })
        .otherwise({
            redirectTo: 'employees'
        });

}]);

// app.controller('EmployeesController', ["$http", "uniqueFilter", function($http, uniqueFilter) {
app.controller('EmployeesController', ["$http", function($http) {
    console.log('Employees controller running');
    var self = this;
    var newEmployee = {};

      self.employees = [];

      getEmployees();

      // read only
      function getEmployees() {
        $http.get('/employees')
          .then(function(response) {
            self.employees = response.data;
            // console.log(self.employees);
          });
      }

    self.message = "Customers controller is the best!";

}]);
