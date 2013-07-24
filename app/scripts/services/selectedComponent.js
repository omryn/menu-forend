'use strict';

angular.module('menuForendApp').factory('selectedComponent', function ($rootScope) {
    var selectedItemHolder = {item: {}};

    return {
        setSelectedItem: function (component) {
                selectedItemHolder.item = component;
        },
        getSelectedItemHolder: function () {
            return selectedItemHolder;
        }
    }
});
