/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use('/libs', express.static(path.join(__dirname, '../app/libs')));
app.use(express.static(path.join(__dirname, '../app')));

app.get('/menu-data', function(req, res) {
    res.json(require('./model/menu').getData());

});

app.use('/', express.static(path.join(__dirname, '../app/index.html')));

app.get(/^\/login|^\/edit/, function (req, res) {
    if (req.path != "/") {
        res.redirect('/');
    }
    res.end();
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    require('./services/socket-data').init(server);


});


