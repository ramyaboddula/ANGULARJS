//creation of angular module
var app = angular.module('ContactApp',[]);

//creation of controller
app.controller('ContactAppCtrl',function ($scope,$http) {
        $scope.contactList = null;
        $scope.selectedPerson = null;
        $http.get('db.json').then(function (response) {
            $scope.contactList = response.data.contacts;

        });
        $scope.selectPerson = function (index) {
            $scope.selectedPerson = $scope.contactList[index];


        };
        
        
});