angular.module("dummyApp")
.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    'use strict';

    var Column = DummyApp.constructors.ColumnOptions;
    var GridOptions = DummyApp.constructors.GridOptions;
    var User = DummyApp.constructors.User;
    var labels = $rootScope.labels;

    $scope.content = "Scope Test";
    
    $scope.biker = new User();

    $scope.bikersGridOptions = new GridOptions(
        [
            new Column(labels.FULL_NAME, function(row){ return row.fullName; }),
            new Column(labels.EMAIL, function(row){ return row.email; }),
            new Column(labels.CITY, function(row){ return row.city; }),
            new Column(labels.RIDE_IN_GROUP, function(row){ return row.rideInGroup; }),
            new Column(labels.DAYS_OF_WEEK, function(row){ return row.daysOfWeek; }),
            new Column(labels.REGISTRATION_DAY, function(row){ return row.registrationDay; })
        ],
        [
            new User("James Isaac Neutron", "neutron@atom.com", "Belo Horizonte", true, "Mon", new Date()),
            new User("Carl Wheezer", "carl@User.com", "Campinas",true, "Tue", new Date()),
            new User("Thomas Johnson", "tjhonson@Users.com", "São Paulo", true, "Mon Fri", new Date()),
        ]
    );
}]);