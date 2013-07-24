'use strict';

angular.module('menuForendApp')
    .controller('MainCtrl', function ($scope, $location, MenuDataService, selectedComponent) {
        $scope.selectedComponent = selectedComponent.getSelectedItemHolder();

        $scope.getDropIndex = function (index) {
            return index % 2 ? index + 1 : index;
        };

        $scope.onDrop = function (event, ui) {
            MenuDataService.addPlaceholders();
            MenuDataService.updateMenuData();
        };

        $scope.setSelectedItem = function (component) {
            selectedComponent.setSelectedItem(component);
        };

        $scope.isSelected = function (component) {
            return component === $scope.selectedComponent.item ? 'selected' : '';
        };

        MenuDataService.addPlaceholders();

    });
