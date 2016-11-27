var app = angular.module('employeeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employees', {
            templateUrl: '/views/template/employees.html',
            controller: 'EmployeesController',
            controllerAs: 'employees'
        })
        .when('/budgets', {
            templateUrl: '/views/template/budgets.html',
            controller: 'BudgetsController',
            controllerAs: 'budgets'
        })
        .otherwise({
            redirectTo: 'employees'
        });
}]);

//=================  Services  ====================================

// app.value('CurrentBudget', '240000');

app.service('monthlyBudget', ['$http', '$q', function monthlyBudgetService($http, $q) {
    console.log('Budget Service Runnning');
    var self = this;
    var currBudget = {};
    var today = new Date();
    var currMonth = today.getMonth() + 1;
    var currYear = today.getFullYear();

    var deferred = $q.defer();

    this.getCurrentBudget = function () {
            return $http.get('/budgets/' + currMonth + '/' + currYear)
                .then(function (response) {
                    // promise is fulfilled
                    deferred.resolve(response.data);
                    // promise is returned
                    return deferred.promise;
                }, function (response) {
                    // the following line rejects the promise
                    deferred.reject(response);
                    // promise is returned
                    return deferred.promise;
                });
        };
}]); // end of currentbudget Service

//=================  Controllers  =================================

app.controller('EmployeesController', ['monthlyBudget', '$http', function(monthlyBudget, $http) {
    console.log('Employees controller running');
    var self = this;

    self.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // invoke service to get current budget
    monthlyBudget.getCurrentBudget()
           .then(
               function (result) {
                   // promise was fullfilled (regardless of outcome)
                   // checks for information will be peformed here
                   self.currentBudget = result[0].monthly_budget;
               },
               function (error) {
                   // handle errors here
                   console.log(error.statusText);
               }
           );

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
                // console.log(self.monthlySalaries);
                self.budgetVariance = self.currentBudget - self.monthlySalaries;
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

    // function: toggleStatus - update
    self.toggleStatus = function(employee) {
        var status = '';
        if (employee.status === "Active") {
            status = "Inactive";
        } else {
            status = "Active";
        }
        // console.log('toggle status: ', employee);
        $http.put('/employees/status/' + employee.id + '/' + status)
            .then(function(response) {
                console.log('STATUS changed. Getting employee again.');
                getEmployees();
            });
    }; // end toggleStatus
}]); // end Controller: EmployeesController


// Controller: BudgetController
app.controller('BudgetsController', ['$http', 'monthlyBudget', function($http, monthlyBudget) {
    console.log('Budgets controller running');
    var self = this;
    var newBudget = {};

    self.budgets = [];

    // invoke service to get current budget
    monthlyBudget.getCurrentBudget()
           .then(
               function (result) {
                   // promise was fullfilled (regardless of outcome)
                   // checks for information will be peformed here
                   self.currentBudget = result[0].monthly_budget;
               },
               function (error) {
                   // handle errors here
                   console.log(error.statusText);
               }
           );

    getBudgets();
    // console.log('getting budgets: ', self.budgets);
    // getCurrentBudget();

    // function: getBudgets - read only
    function getBudgets() {
        $http.get('/budgets')
            .then(function(response) {
                self.budgets = response.data;
                // console.log(self.budgets);
            });
    } // end function getBudgets

    // function addBudget - insert
    self.addBudget = function() {
        var mon = self.newBudget.month_char;
        self.newBudget.month = self.getMonthValue(mon);
        $http.post('/budgets', self.newBudget)
            .then(function(response) {
                console.log('POST finishedBudgets budget again.');
                getBudgets();
            });
    }; // end addBudget

    // get numeric value for month
    self.getMonthValue = function(mon) {
        date = mon + " 1, 2000";
        return new Date(Date.parse(date)).getMonth() + 1;
    }; // end getMonthValue


}]);
