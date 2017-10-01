angular.module("dummyApp")
    .directive('accordion', ['$rootScope', function ($rootScope) {

        'use strict';

        return {
            scope: {
                animate: '@?'
            },
            transclude: {
                'title': 'accordionTitle',
                'body': 'accordionBody'
            },
            controller: 'AccordionCtrl',
            templateUrl: 'directives/accordion/accordion_template.html'
        };
    }]);