angular.module("dummyApp")
    .directive('userForm', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {
                user: '='
            },
            controller: 'UserFormCtrl',
            templateUrl: 'directives/userForm/userForm_template.html',
        };
    }]);

angular.extend(DummyApp.constructors, function () {

    'use strict';

    function User(fullName, email, city, rideInGroup, daysOfTheWeek, registrationDay) {
        this.fullName = fullName;
        this.email = email;
        this.city = city;
        this.rideInGroup = rideInGroup;
        this.daysOfTheWeek = daysOfTheWeek;
        this.registrationDay = registrationDay;
    }

    return {
        User: User
    };
}());