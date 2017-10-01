angular.module('dummyApp')
.controller('AccordionCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    'use strict';

    $scope.labels = $rootScope.labels;

    $scope.isOpen = false;

    $scope.open = function open(){
        $scope.isOpen = true;
    };

    
    $scope.close = function close(){
        $scope.isOpen = false;
    };
}]);