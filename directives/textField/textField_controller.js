angular.module('dummyApp')
    .controller('TextFieldCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        
        'use strict';

        $scope.labels = $rootScope.labels;
        $scope.maxLength = 255;
    }]);