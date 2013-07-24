/**
 * Created with IntelliJ IDEA.
 * User: Omry_Nachman
 * Date: 6/5/13
 * Time: 2:58 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var io;
var model = require('../model/menu');

module.exports = {
    init: function (server) {
        io = require('socket.io').listen(server);
        io.on('connection', function (socket) {
            socket.emit('data', model.getData());

            socket.on('login', function (name) {
                socket.set('user', name, function () {
                    socket.emit('login-status', true);
                });
            });

            socket.on('update', function (data) {
                model.setData(data);
                socket.get('user', function (err, user) {
                    socket.broadcast.emit('data-update', {
                        data: data,
                        user: user
                    });
                });
            });

            socket.on('get-data', function () {
                socket.emit('data', model.getData());
            });

        });
    }
};

