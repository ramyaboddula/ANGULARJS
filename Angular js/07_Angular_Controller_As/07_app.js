//creation of module
var app = angular.module('nestedAsAPP',[]);

//creation of parent controller
app.controller('parentAsCtrl',function () {
    this.test = ' ';
});

//creation of  child controller
app.controller('childAsCtrl',function () {
    this.test = ' ';
});