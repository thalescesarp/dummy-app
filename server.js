(function () {

    'use strict';
    //Just a basic express http server configuration so I can run the app locally.
    var express = require('express');
    
    //I included a favicon so the app looks cooler.
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