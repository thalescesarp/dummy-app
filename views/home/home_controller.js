angular.module("dummyApp")
    .controller('HomeCtrl', ['$scope', '$rootScope', 'userService', 'pathService', '$sce', '$route', function ($scope, $rootScope, userService, pathService, $sce, $route) {

        'use strict';

        var Column = DummyApp.constructors.ColumnOptions;
        var GridOptions = DummyApp.constructors.GridOptions;
        var User = DummyApp.constructors.User;
        var Week = DummyApp.constructors.Week;
        var labels = $rootScope.labels;

        $scope.biker = new User();

        $scope.bikersGridOptions = new GridOptions(
            [
                new Column(labels.FULL_NAME, function (row) { return row.fullName; }),
                new Column(labels.EMAIL, function (row) { return row.email; }),
                new Column(labels.CITY, function (row) { return row.city; }),
                new Column(labels.RIDE_IN_GROUP, function (row) { return row.rideInGroup; }),
                new Column(labels.DAYS_OF_THE_WEEK, function (row) { return row.daysOfTheWeek; }),
                new Column(labels.REGISTRATION_DAY, function (row) { return row.registrationDay; })
            ],
            []
        );

        userService.getUserList().then(function (userList) {
            for (var index = 0; index < userList.length; index++) {
                var user = userList[index];
                $scope.bikersGridOptions.data.push(user);
            }
        });

        userService.getHelp().then(function(help) {
            $scope.helpContent = $sce.trustAsHtml(help);
        });

        function addNewBiker() {
            $scope.biker.registrationDay = new Date();
            $scope.bikersGridOptions.data.push($scope.biker);
            clearBiker();
        }

        function clearBiker() {
            $scope.biker = new User();
        }

        $scope.addNewBiker = addNewBiker;
        $scope.clearBiker = clearBiker;

        pathService.getPath().then(function(path){
            $scope.path = path;
        });

       pathService.getBreadCrumbByRoute($route.current).then(function(breadcrumbStack){
            for (var index = 0; index < breadcrumbStack.length; index++) {
                var item = breadcrumbStack[index];
                item.breadcrumbItem = $sce.trustAsHtml(item.breadcrumbItem);
            }

            $scope.breadcrumbStack = breadcrumbStack;
       });

       userService.getCurrentUser().then(function(currentUser){
           $scope.currentUser = currentUser;
       });
    }]);