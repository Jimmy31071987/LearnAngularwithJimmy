/*
Create a module
*/
var authenticationapp = angular.module("authenticationApp", []);

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
