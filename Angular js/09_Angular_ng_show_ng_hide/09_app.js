//create a module
var app = angular.module('hobbiesApp',[]);

//creaton of controller
app.controller('hobbiesAppCtrl',function () {
        this.eating = false;
        this.coding = false;
        this.sleeping = false;
});