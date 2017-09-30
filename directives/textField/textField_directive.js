//The App had many similar inputs. So I created a directive to handle
//all text inputs in the same way.
angular.module("dummyApp")
.directive('textField', ['$rootScope', function ($rootScope) {

    'use strict';

    return {
        scope: {
            model: "=ngModel",
            name: "@",
            label: "@",
            instructions: "@?onFocusInstructions"
        },
        controller: 'TextFieldCtrl',
        templateUrl: 'directives/textField/textField_template.html',
        require: ['^form' ,'ngModel'],
        link: function(scope, element, attrs) {
            scope.isRequired = 'required' in attrs;
        }
    };
}]);