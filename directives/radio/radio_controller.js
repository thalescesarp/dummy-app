angular.module('dummyApp')
    .controller('RadioCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        
        'use strict';

        $scope.clicked = function() {
            $scope.model = $scope.value;
        };
    }]);