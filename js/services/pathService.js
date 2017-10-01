angular.module("dummyApp")
.factory("pathService", ['$http', '$q', function($http, $q) {

    var constants = DummyApp.constants;

    function getPath() {
        var deferred = $q.defer();

        var request = {
            method: "GET",
            url: constants.pathFileUrl
        };

        $http(request).then(function(response){
            deferred.resolve(response.data);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getPath: getPath
    };
}]);