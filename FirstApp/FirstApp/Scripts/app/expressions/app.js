var expressionsApp = angular.module("expressionsApp", []);

//$parse - Angular Internal Service: $parse Service
expressionsApp.controller("ExpressionsController", function ($scope,$parse) {

    $scope.$watch('expr', function (newVal, oldVal, scope) {

        if (newVal !== oldVal) {
            var parseFun = $parse(newVal);
            $scope.parsedValue = parseFun(scope);
        }
    });

});