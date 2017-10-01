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

    function getBreadCrumbByRoute(currentRoute) {
        var deferred = $q.defer();

        deferred.resolve([
            {
                name: "home",
                breadcrumbItem: "<i class=\"fa fa-home\" aria-hidden=\"true\"></i>",
                route: "",
            },
            {
                name: "page1",
                breadcrumbItem: "Page1",
                route: "",
            },
            {
                name: "breadcrumb",
                breadcrumbItem: "Breadcrumb",
                route: "",
            },
            {
                name: "currentpage",
                breadcrumbItem: "Currentpage",
                route: "",
            }
        ]);

        return deferred.promise;
    }

    return {
        getPath: getPath,
        getBreadCrumbByRoute: getBreadCrumbByRoute
    };
}]);