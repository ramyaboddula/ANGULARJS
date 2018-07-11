//creaton of module
var app = angular.module('nestedApp',[]);

//creation parent controller

app.controller('parentCtrl',function ($scope) {
    $scope.test = ' ' ;
});

//creation of chld controller
app.controller('childCtrl',function ($scope) {
    $scope.test = ' ';
});