'use strict';

angular.module('menuForendApp')
    .controller('EditComponentCtrl', function ($scope, selectedComponent) {
        $scope.selectedComponentHolder = selectedComponent.getSelectedItemHolder();
    });
