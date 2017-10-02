angular.module("dummyApp")
.directive('checkbox', ['$rootScope', function ($rootScope) {

    'use strict';

    return {
        scope: {
            check: "=ngModel",
            name: "@",
            label: "@",
            index: "=",
            error: "=?"
        },
        controller: 'CheckboxCtrl',
        templateUrl: 'directives/checkbox/checkbox_template.html',
        require: ['^form' ,'ngModel']
    };
}]);