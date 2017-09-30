//I like using self invoking functions with 'use strict'.
//With it I avoid poluting the global scope and get better syntax errors.
//Having syntax errors is great because they prevent some mistyping and 
//bad naming bugs which can be hard to debug because sometimes we just 
//can't see them in our own code. Countless hours have been saved! ;)
//I also use jshint as a linting tool.

(function () {
    'use strict';
    angular.module('dummyApp', [
        'ngRoute',
        'ngResource'
    ]);
})();