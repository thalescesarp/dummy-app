angular.module('dummyApp')
.controller('GridCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        'use strict';

        if( !($scope.ctrl.options instanceof DummyApp.constructors.GridOptions) ){
            throw new DummyApp.constructors.DirectiveOptionsException(
                "grid directive options must be a GridOptions!");
        var GridOptions = DummyApp.constructors.GridOptions;

        if( !($scope.options instanceof GridOptions) ){
        }

        function getCellValue(row, column) {
            return column.cellValueGetter(row);
        }

        $scope.getCellValue = getCellValue;
}]);