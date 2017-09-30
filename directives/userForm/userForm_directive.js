angular.module("dummyApp")
    .directive('userForm', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {
                user: '=',
                submit: '&onSubmit',
                cancel: "&onCancel"
            },
            controller: 'UserFormCtrl',
            templateUrl: 'directives/userForm/userForm_template.html',
        };
    }]);

angular.extend(DummyApp.constructors, function () {

    'use strict';

    //Seting the days names to objects properties keep it easy to understand
    //but, also enables using it as an array;
    function Week(Sun, Mon, Tue, Wed, Thu, Fri, Sat) {
        this.Sun = Sun || false;
        this.Mon = Mon || false;
        this.Tue = Tue || false;
        this.Wed = Wed || false;
        this.Thu = Thu || false;
        this.Fri = Fri || false;
        this.Sat = Sat || false;
    }

    Week.prototype.toStringByLocale = function toStringByLocale($locale, labels) {
        var days = Object.keys(this);
        var localDays = $locale.DATETIME_FORMATS.SHORTDAY;
        var activeDaysNames = [];

        if(this.isEveryday()){
            return labels.EVERYDAY;
        }

        if(this.isAllWeekDays()){
            return labels.WEEK_DAYS;
        }

        if(this.isWeekend()){
            return labels.WEEKENDS;
        }

        for (var index = 0; index < days.length; index++) {
            var day = days[index];

            if (this[day]) {
                activeDaysNames.push(localDays[index]);
            }
        }

        return activeDaysNames.join(", ");
    };

    Week.prototype.anyDay = function anyDay() {
        return this.Sun || this.Mon || this.Tue || this.Wed ||
            this.Thu || this.Fri || this.Sat;
    };

    Week.prototype.isEveryday = function isEveryday() {
        return this.Sun && this.Mon && this.Tue && this.Wed &&
            this.Thu && this.Fri && this.Sat;
    };

    Week.prototype.isAllWeekDays = function isAllWeekDays() {
        return this.Mon && this.Tue && this.Wed && this.Thu && this.Fri;
    };

    Week.prototype.isWeekend = function isWeekend() {
        return this.Sun && this.Sat &&
            !(this.Mon || this.Tue || this.Wed || this.Thu || this.Fri);
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