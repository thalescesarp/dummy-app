angular.module('dummyApp')
    .controller('UserFormCtrl', ['$scope', '$rootScope', '$locale', function ($scope, $rootScope, $locale) {

        'use strict';

        var User = DummyApp.constructors.User;

        $scope.labels = $rootScope.labels;
        $scope.maxlength = 255;
        $scope.localDaysOfTheWeek = $locale.DATETIME_FORMATS.SHORTDAY;

        if (!($scope.user instanceof User)) {
            throw new Error("User directive user must be a instance of User!");
        }
    }]);