angular.module("dummyApp")
.factory("userService", ['$http', '$q', function($http, $q) {

    var constants = DummyApp.constants;
    var User = DummyApp.constructors.User;
    var Week = DummyApp.constructors.Week;    

    function getUserList() {
        var deferred = $q.defer();

        var request = {
            method: "GET",
            url: constants.usersFileUrl
        };

        //Get the user and return an User objects list.
        $http(request).then(function(response){
            var userList = [];

            for (var index = 0; index < response.data.length; index++) {
                var user = response.data[index];

                user.daysOfTheWeek = angular.extend(new Week(), user.daysOfTheWeek);
                userList.push(angular.extend(new User(), user));
            }

            deferred.resolve(userList);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getHelp() {
        var deferred = $q.defer();

        var request = {
            method: "GET",
            url: constants.helpFileUrl
        };

        $http(request).then(function(response){
            deferred.resolve(response.data.help);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getUserList: getUserList,
        getHelp: getHelp
    };
}]);