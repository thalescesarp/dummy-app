angular.module("dummyApp")
    .controller('RootCtrl', ['$scope', '$rootScope', '$resource', function ($scope, $rootScope, $resource) {

        'use strict';

        //Using a file to store words translations decouples the app language from the interface.
        var languageFilePath = DummyApp.constants.translationFilePath;
        $resource(languageFilePath).get(function (data) {
            $rootScope.labels = data;
        });

    }]);