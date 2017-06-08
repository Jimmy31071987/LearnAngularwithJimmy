var inheritanceapp = angular.module("inHeritance", []);
inheritanceapp.controller("ParentController", function ($scope) {
    $scope.person = { greeted: false };
});
inheritanceapp.controller("ChildController", function ($scope) {
    $scope.person.greeted = true;
    $scope.person.name = "Parul Bansal";
    $scope.Hey = function () {
        $scope.person.name = "Hello World!";
    }
});

var clickapp = angular.module("clickApp", ['inHeritance']);

clickapp.controller("MyController", function ($scope) {

    $scope.counter = 0;
    $scope.add = function () { $scope.counter++; };
    $scope.subtract = function () { $scope.counter--; };
    $scope.addValue = function (value) { $scope.counter += value; }
});


/*
Create a module
*/
var authenticationapp = angular.module("authenticationApp", ['clickApp']);

/*
 Call Constructor on Load 
*/
authenticationapp.run(function ($rootScope) {
    //$rootscope is a root / parent scope of all other scopes.
    $rootScope.legend = "Authentication";
})

//Creating Controller
authenticationapp.controller("authController", function ($scope) {
    //object model declaration
    $scope.clock = { now: new Date() };
    $scope.person = { name: "Jimmy Test" };

    //function/method
    var updateClock = function () {
        $scope.clock.now = new Date();
    };

    //loop
    setInterval(function () { $scope.$apply(updateClock); }, 1000);

    //calling default function
    updateClock();
});
