angular.module('dummyApp')
    .controller('CheckboxCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        
        'use strict';

        $scope.clicked = function() {
            $scope.check = !$scope.check;
        };
    }]);