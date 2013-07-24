'use strict';

angular.module('menuForendApp')
    .factory('LoginService', function ($cookieStore, ServerConnectionService) {
        var oldCookie = $cookieStore.get('userName');
        var userDetails = {
            name: oldCookie,
            persist: !!oldCookie
        };


        return {
            getUserDetails: function () {
                return userDetails;
            },
            setUserDetails: function (data) {
                userDetails = data;
                if (userDetails.name && userDetails.persist) {
                    $cookieStore.put('userName', userDetails.name);
                } else {
                    $cookieStore.remove('userName');
                }
                ServerConnectionService.login(userDetails.name)
            },
            isLoggedIn: function () {
                return !!userDetails.name;
            }
        }
    });
