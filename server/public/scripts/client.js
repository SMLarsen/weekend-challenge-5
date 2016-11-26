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
                // console.log(self.monthlySalaries);
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
app.controller('BudgetsController', ["$http", function($http) {
    console.log('Budgets controller running');
    var self = this;
    var newBudget = {};

    self.budgets = [];

    getBudgets();
    // console.log('getting budgets: ', self.budgets);

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
        console.log('new budget: ', self.newBudget);
        $http.post('/budgets', self.newBudget)
            .then(function(response) {
                console.log('POST finishedBudgets budget again.');
                getBudgets();
            });
    }; // end addBudget
}]);
