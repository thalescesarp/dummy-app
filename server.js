(function () {
    var express = require('express');
    var favicon = require('serve-favicon');
    var app = express();
    var http = require('http').Server(app);

    app.use(express.static(__dirname));
    app.use(express.static(__dirname + "/../../../"));

    app.all('/*', function (req, res) {
        res.sendFile('index.html', { root: __dirname });
    });

    http.listen(8000, function () {
        console.log('listening on *:8000');
    });
})();