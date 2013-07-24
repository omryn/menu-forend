'use strict';

angular.module('menuForendApp').factory('ServerConnectionService', function ($rootScope) {
    var socket = io.connect('http://localhost');
    var lastUpdated = {
    };
    var lastData;
    var listeners = {};

    socket.on('data-update', function (data) {
        $rootScope.$apply(function () {
            lastUpdated.user = data.user;
            lastUpdated.time = Date.now();
        });
        lastData = data.data;
        emit('data', data.data);
    });
    socket.on('data', function (data) {
        lastData = data;
        emit('data', data)
    });

    function emit(event, data) {
        if (listeners[event] instanceof Array) {
            listeners[event].forEach(function (callback) {
                callback(data);
            });
        }
    }

    return {
        on: function (event, handler) {
            listeners[event] = listeners[event] || [];
            listeners[event].push(handler);
            if(event == 'data' && lastData) {
                console.log(lastData);
                handler(lastData);
            }
        },
        update: function (data) {
            socket.emit('update', data);
        },
        login: function (name) {
            socket.emit('login', name);
        }   ,
        getLastUpdate: function () {
            return lastUpdated;
        }
    };
});
