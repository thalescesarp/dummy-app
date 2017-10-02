angular.module('dummyApp')
    .controller('NavbarsCtrl', ['$scope', '$rootScope', 'pathService', 'userService', '$sce', '$route', '$resource', function ($scope, $rootScope, pathService, userService, $sce, $route, $resource) {

        'use strict';

        //Loads before rootscope.
        var languageFilePath = DummyApp.constants.translationFilePath;
        $resource(languageFilePath).get(function (translationData) {
            $scope.labels = translationData;
        });

        pathService.getPath().then(function (path) {
            $scope.path = path;
        });

        pathService.getBreadCrumbByRoute($route.current).then(function (breadcrumbStack) {
            for (var index = 0; index < breadcrumbStack.length; index++) {
                var item = breadcrumbStack[index];
                item.breadcrumbItem = $sce.trustAsHtml(item.breadcrumbItem);
            }

            $scope.breadcrumbStack = breadcrumbStack;
        });

        userService.getCurrentUser().then(function (currentUser) {
            $scope.currentUser = currentUser;
        });
    }]);