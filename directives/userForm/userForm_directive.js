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

    function Week(Sun, Mon, Tue, Wed, Thu, Fri, Sat) {
        this.Sun = Sun || false;
        this.Mon = Mon || false;
        this.Tue = Tue || false;
        this.Wed = Wed || false;
        this.Thu = Thu || false;
        this.Fri = Fri || false;
        this.Sat = Sat || false;
    }

    Week.prototype.toStringByLocale = function toStringByLocale($locale) {
        var days = Object.keys(this);
        var localDays = $locale.DATETIME_FORMATS.SHORTDAY;
        var activeDaysNames = [];

        for (var index = 0; index < days.length; index++) {
            var day = days[index];

            if (this[day]) {
                activeDaysNames.push(localDays[index]);
            }
        }

        return activeDaysNames.join(", ");
    };

    function User(fullName, email, city, rideInGroup, daysOfTheWeek, registrationDay) {
        //Default daysOfTheWeek to new Week so User can be instantiated without parameters.
        daysOfTheWeek = daysOfTheWeek || new Week();

        if (!(daysOfTheWeek instanceof Week)) {
            throw new Error("User daysOfTheWeek must be a Week object!");
        }

        this.fullName = fullName;
        this.email = email;
        this.city = city;
        this.rideInGroup = rideInGroup;
        this.daysOfTheWeek = daysOfTheWeek;
        this.registrationDay = registrationDay;
    }

    return {
        Week: Week,
        User: User
    };
}());