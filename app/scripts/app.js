'use strict';

var menuForendApp = angular.module('menuForendApp', ['ngDragDrop', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/edit', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).
            when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }).
            when('/login/:logout', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
