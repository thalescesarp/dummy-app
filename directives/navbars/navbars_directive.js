angular.module("dummyApp")
.directive('navbars', ['$rootScope', function ($rootScope) {

    'use strict';

    return {
        scope: {},
        controller: 'NavbarsCtrl',
        templateUrl: 'directives/navbars/navbars_template.html',
        require: ['^form' ,'ngModel']
    };
}]);