var app = angular.module('sampleApp',[]);

//creation of controller
app.controller('sampleAppCtrl',function ($scope) {
    $scope.time = '';
    $scope.greeting ='';

    $scope.greet = function(){
        if($scope.time <= 12){
            $scope.greeting = 'good morning';
        }
        else{
            $scope.greeting = 'good evening';
        }
    }
});