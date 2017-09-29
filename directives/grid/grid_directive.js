//I think that the bikers grid will be the most complex directive in the page.
//So I started developing it first. If I find any difficulties early in the project,
//I still have time to manage, think of a better solution and ask for help to get 
//some new perspectives.

angular.module("dummyApp")
    .directive('grid', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {
                //For the directives that need to be complex I like using an options object.
                //I was inspired by the configuration objects from the Sencha ExtJS framework.
                //With an options object I don't need to worry about scope isolation.
                //It also makes it easier to caller and callee to communicate in both directions.

                options: '='
            },
            controller: 'GridCtrl',
            templateUrl: 'directives/grid/grid_template.html',
        };
    }]);

angular.extend(DummyApp.constructors, function () {

    'use strict';

    //To make it maintainable, clear and control the information exchanged with the directive 
    //I define some constructors which must be used to create the options object for the directive. 

    function ColumnOptions(label, cellValueGetter) {
        this.label = label;
        this.cellValueGetter = cellValueGetter;
    }

    function GridOptions(columns, data) {
        this.verifyColumns(columns);
        this.verifyData(data);

        //Configuring the property to writable: false and configurable: false
        //prevents the columns array reference to be lost due to mistaken assingments.
        Object.defineProperty(this, 'columns', {
            value: columns,
            enumerable: true,
            writable: false,
            configurable: false
        });

        Object.defineProperty(this, 'data', {
            value: data,
            enumerable: true,
            writable: false,
            configurable: false
        });
    };

    GridOptions.prototype.verifyColumns = function (columns) {

        if ( !Array.isArray(columns) ) {
            throw new DummyApp.constructors.DirectiveOptionsException(
                "grid directive columns must be an array of ColumnOptions!");
        } else if ( columns.length == 0 ) {
            throw new DummyApp.constructors.DirectiveOptionsException(
                "grid directive cannot be empty!");
        } else {
            var wrongTypeColumns = columns.filter( function(col) { 
                return !(col instanceof DummyApp.constructors.ColumnOptions); 
            });

            if ( wrongTypeColumns.length > 0 ) {
                throw new DummyApp.constructors.DirectiveOptionsException(
                    "grid directive columns must be an array of ColumnOptions!");
            }
        }
    };

    DummyApp.constructors.GridOptions.prototype.verifyData = function(data) {
        if ( !Array.isArray(data) ) {
            throw new DummyApp.constructors.DirectiveOptionsException(
                "grid directive data must be an array of Objects!");
        } else {
            var wrongTypeColumns = data.filter( function(col) { 
                return !(col instanceof Object); 
            });

            if ( wrongTypeColumns.length > 0 ) {
                throw new DummyApp.constructors.DirectiveOptionsException(
                    "grid directive data must be an array of Objects!");
            }
        }
    };

    return {
        ColumnOptions: ColumnOptions,
        GridOptions: GridOptions
    };
}());