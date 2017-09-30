angular.module('dummyApp')
    .filter('weekDays', ['$locale', '$rootScope', function ($locale, $rootScope) {
        
        var Week = DummyApp.constructors.Week;

        function weekToString(weekObj){
            if(weekObj instanceof Week) {
                return weekObj.toStringByLocale($locale, $rootScope.labels);
            }
            
            return weekObj;
        }
        
        return weekToString;
    }]);