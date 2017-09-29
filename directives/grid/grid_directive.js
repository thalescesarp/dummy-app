//I think that the bikers grid will be the most complex directive in the page.
//So I started developing it first. If I find any difficulties early in the project.
//I still have time to manage, think of a better solution and ask for help to get 
//some new perspectives.

angular.module("dummyApp")
    .directive('grid', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {},
            controller: 'GridCtrl',
            controllerAs: 'ctrl',
            templateUrl: 'directives/grid/grid_template.html',
            bindToController: {
            
            //For the directives that need to be complex I like using an options object.
            //I was inspired by the configuration objects from the Sencha ExtJS framework.
            //With an options object I don't need to worry about scope isolation.
            //It also makes it easier to caller and callee to communicate in both directions.

                options: '='
            }
        };
    }]);