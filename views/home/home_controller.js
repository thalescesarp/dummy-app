angular.module("dummyApp")
.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    'use strict';

    $scope.content = "Scope Test";

}]);