angular.module('dummyApp')
.controller('GridCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        'use strict';

        var GridOptions = DummyApp.constructors.GridOptions;

        if( !($scope.options instanceof GridOptions) ){
            throw new Error("grid directive options must be a GridOptions!");
        }

        function getCellValue(row, column) {
            return column.cellValueGetter(row);
        }

        $scope.getCellValue = getCellValue;
}]);