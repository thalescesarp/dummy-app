(function () {

    'use strict';

    angular.module("dummyApp")
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.html"
                }).when("/bikers", {
                    templateUrl: "views/bikers/bikers.html"
                })
                .when("/help", {
                    templateUrl: "views/help/help.html"
                });
        }]);
})();