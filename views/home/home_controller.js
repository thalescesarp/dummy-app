angular.module("dummyApp")
.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    'use strict';

    var Column = DummyApp.constructors.ColumnOptions;
    var GridOptions = DummyApp.constructors.GridOptions;
    var labels = $rootScope.labels;

    $scope.content = "Scope Test";
    
    function Rider(fullName, email, city, rideInGroup, daysOfWeek, registrationDay) {
        this.fullName = fullName;
        this.email = email;
        this.city = city;
        this.rideInGroup = rideInGroup;
        this.daysOfWeek = daysOfWeek;
        this.registrationDay = registrationDay;
    }

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
            new Rider("James Isaac Neutron", "neutron@atom.com", "Belo Horizonte", true, "Mon", new Date()),
            new Rider("Carl Wheezer", "carl@biker.com", "Campinas",true, "Tue", new Date()),
            new Rider("Thomas Johnson", "tjhonson@bikers.com", "São Paulo", true, "Mon Fri", new Date()),
        ]
    )
}]);