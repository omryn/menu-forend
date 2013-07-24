'use strict';

menuForendApp.controller('StatusCtrl', function ($scope, $location, LoginService, MenuDataService, ServerConnectionService) {
    $scope.login = function () {
        $location.path('/login/user');
    };

    $scope.getUser = function () {
        return LoginService.getUserDetails().name;
    };

    $scope.menu = MenuDataService.getMenuData();
    $scope.lastUpdate =  ServerConnectionService.getLastUpdate();

    if (!LoginService.isLoggedIn()) {
        $scope.login();
    }
});
