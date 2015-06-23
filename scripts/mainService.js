var app = angular.module('ecommerce');

app.service('mainService', function($http) {

    this.addItem = function(item) {
        return $http ({
            method: 'POST',
            url: 'http://localhost:8081'
        }).then(function(resp) {
            console.log(resp);
        })
    }

});
