angular.module("dummyApp")
.directive('radio', ['$rootScope', function ($rootScope) {

    'use strict';

    return {
        scope: {
            model: "=ngModel",
            value: "=ngValue",
            name: "@",
            label: "@",
            index: "=",
            error: "=?"
        },
        controller: 'RadioCtrl',
        templateUrl: 'directives/radio/radio_template.html',
        require: ['^form' ,'ngModel', 'ngValue']
    };
}]);