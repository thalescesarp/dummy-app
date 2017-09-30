angular.module("dummyApp")
    .controller('RootCtrl', ['$scope', '$rootScope', '$resource', function ($scope, $rootScope, $resource) {

        'use strict';

        //Using a file to store words translations decouples the app language from the interface.
        //It also allows terms to be reused in severeal pages while kept in one unique place.
        var languageFilePath = DummyApp.constants.translationFilePath;
        $resource(languageFilePath).get(function (translationData) {
            $rootScope.labels = translationData;
        });

    }]);