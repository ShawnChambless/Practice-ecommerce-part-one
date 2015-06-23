var app = angular.module('ecommerce', ['ngRoute']);
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/mainTmpl.html',
            controller: 'mainCtrl'
        })
        .otherwise('/')
});
