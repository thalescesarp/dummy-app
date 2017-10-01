angular.module("dummyApp")
    .directive('pathIcon', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {
                pathItem: "="
            },
            controller: 'PathIconCtrl',
            templateUrl: 'directives/pathIcon/pathIcon_template.html'
        };
    }]);