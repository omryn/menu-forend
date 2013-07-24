'use strict';

angular.module('menuForendApp').factory('MenuDataService', function ($rootScope, ServerConnectionService) {
    var model = {
        data: {
            items: []
        }
    };

    var placeholder = {
        placeholder: true
    };

    function getArrayWithPlaceholders(itemsArray) {
        var result = [placeholder];

        itemsArray.forEach(function (item) {
            if (item !== placeholder) {
                result.push(item);
                result.push(placeholder);
            }
        });

        return result;
    }

    function addPlaceholdersToItems(data) {
        if (data.items && _.isArray(data.items)) {
            data.items.forEach(addPlaceholdersToItems);
            data.items = getArrayWithPlaceholders(data.items);
        }
    }

    function removePlaceholders(data) {
        data.items = _.without(data.items, placeholder);
    }

    function updateData(newData) {
        $rootScope.$apply(function () {
            model.data = newData;
            addPlaceholdersToItems(model.data);
        });
    }


    ServerConnectionService.on('data', updateData);

    return {
        setMenuData: function (newData) {
            model.data = newData;
        },
        getMenuData: function () {
            return model;
        },
        addPlaceholders: function () {
            addPlaceholdersToItems(model.data);
        },
        updateMenuData: function () {
            model.update = {
                time: Date.now()
            };
            removePlaceholders(model.data);
            ServerConnectionService.update(model.data);
            addPlaceholdersToItems(model.data);
        }

    };
});
