angular.module('dummyApp')
    .controller('UserFormCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        'use strict';

        var User = DummyApp.constructors.User;

        $scope.labels = $rootScope.labels;
        $scope.maxlength = 255;

        if (!($scope.user instanceof User)) {
            throw new Error("User directive user must be a instance of User!");
        }
    }]);