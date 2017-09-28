(function () {

    'use strict';

    angular.module("dummyApp")
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.html"
                });
            //TODO:
            // .when("/bikers", {
            //     templateUrl: "views/bikers.html"
            // })
            // .when("/help", {
            //     templateUrl: "views/help.html"
            // });
        }]);
})();