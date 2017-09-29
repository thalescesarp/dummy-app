angular.module("dummyApp")
.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    'use strict';

    $scope.content = "Scope Test";

    var Column = DummyApp.constructors.ColumnOptions;
    
    function Rider(email, city, rideInGroup, daysOfWeek, registrationDay) {
        this.email = email;
        this.city = city;
        this.rideInGroup = rideInGroup;
        this.daysOfWeek = daysOfWeek;
        this.registrationDay;
    }

    $scope.bikersGridOptions = new DummyApp.constructors.GridOptions(
        [
            new Column("E-mail", function(row){ return row.email; }),
            new Column("City", function(row){ return row.city; }),
            new Column("Ride in group", function(row){ return row.rideInGroup; }),
            new Column("Days of the week", function(row){ return row.daysOfWeek; }),
            new Column("Registration day", function(row){ return row.registrationDay; })
        ],
        [
            new Rider("James Isaac Neutron", "neutron@atom.com", true, "Mon", new Date()),
            new Rider("Carl Wheezer", "carl@biker.com", true, "Tue", new Date()),
            new Rider("Thomas Johnson", "tjhonson@bikers.com", true, "Mon Fri", new Date()),
        ]
    )
}]);