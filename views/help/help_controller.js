angular.module("dummyApp")
    .controller('HelpCtrl', ['$scope', '$rootScope', 'userService', 'pathService', '$sce', '$route', function ($scope, $rootScope, userService, pathService, $sce, $route) {

        'use strict';

        $scope.labels = $rootScope.labels;

        userService.getHelp().then(function(help) {
            $scope.helpContent = $sce.trustAsHtml(help);
        });
    }]);