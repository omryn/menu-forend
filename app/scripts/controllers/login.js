'use strict';

angular.module('menuForendApp')
    .controller('LoginCtrl', function ($scope, $location, $routeParams, LoginService) {
        $scope.userDetails = LoginService.getUserDetails();
        if ($scope.userDetails.name && !$routeParams.logout) {
            LoginService.setUserDetails($scope.userDetails);
            $location.path('/edit');
        }

        $scope.login = function () {
            LoginService.setUserDetails($scope.userDetails);
            $location.path('/edit');
        }
    });
