angular.module('dummyApp')
    .filter('weekDays', ['$locale', function ($locale) {
        
        var Week = DummyApp.constructors.Week;

        function weekToString(weekObj){
            if(weekObj instanceof Week) {
                return weekObj.toStringByLocale($locale);
            }
            
            return weekObj;
        }
        
        return weekToString;
    }]);