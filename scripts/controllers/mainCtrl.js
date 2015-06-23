var app = angular.module('ecommerce');

app.controller('mainCtrl', function($scope, mainService) {

    $scope.addItem = function(item) {
        if(item) {
            mainService.addItem(item);
        }
    }

    $scope.items = mainService.addItem.resp

});
