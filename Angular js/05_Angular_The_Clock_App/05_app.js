//create module
var app = angular.module('clockApp',[]);

//creation of controller
app.controller('clockAppCtrl',function($scope,$interval){
    var indianClock = function(){
        var today = new Date();
        var options = {timeZone: 'Asia/kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock,1000);

    var americanClock = function(){
        var today = new Date();
        var options = {timeZone: 'America/New_York'};
        $scope.americanTime = today.toLocaleTimeString('en-US',options);
        $scope.americanDate = today.toLocaleDateString('en-US',options);
    };
    $interval(americanClock,1000);

    var chinaClock = function(){
        var today = new Date();
        var options = {timeZone: 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(chinaClock,1000);
});