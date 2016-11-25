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
            templateUrl: '/views/template/employees.html',
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

      // function: getEmployees - read only
      function getEmployees() {
        $http.get('/employees')
          .then(function(response) {
            self.employees = response.data;
            getSalaries();
            // console.log(self.employees);
          });
      } // end function getEmployees

      // function: getSalaries - read only
      function getSalaries() {
        $http.get('/employees/salary')
          .then(function(response) {
            self.monthlySalaries = response.data[0].monthly_salaries;
            console.log(self.monthlySalaries);
          });
      } // end function getSalaries

      // function addEmployee - insert
      self.addEmployee = function() {
        console.log('new employee: ', self.newEmployee);
        $http.post('/employees', self.newEmployee)
          .then(function(response) {
            console.log('POST finished. Getting employee again.');
            getEmployees();
          });
      }; // end addEmployee

      // function: deleteEmployee - delete
      self.deleteEmployee = function(employee) {
        console.log('delete employee: ', employee);
        $http.delete('/employees/' + employee.id)
          .then(function(response) {
            console.log('DELETE finished. Getting employee again.');
            getEmployees();
          });
      }; // end deleteEmployee



}]);
