var DummyApp = DummyApp || {};
DummyApp.constructors = DummyApp.constructors || {};

(function() {
    'use strict';

    //Defining my own exceptions helps keeping my errors expressive.
    DummyApp.constructors.Exception = function Exception(message) {
        Object.defineProperty(this, 'message', { 
            value: message, 
            enumerable: true, 
            writable: true, 
            configurable: false
        });
    }
    //Writing a custom toString method for exceptions enhances maintainability also. 
    DummyApp.constructors.Exception.prototype.toString = function() {
        return '[Exception: ' + this.message + ']';
    }

    //I like pseudoclassical inheritance. I like using JavaScript in an object oriented (OO) style,
    //even knowing that it is prototype oriented. 
    //OO is a very popular paradigm, so it helps communicating and designing with other developers.
    DummyApp.constructors.DirectiveOptionsException = function DirectiveOptionsException(message) {
        //I like using constructor stealing to avoid code duplication.
        DummyApp.constructors.Exception.apply(this, message);
    }

    DummyApp.constructors.DirectiveOptionsException.prototype = Object.create(
        DummyApp.constructors.Exception.prototype, {
            constructor: {
                value: DummyApp.constructors.DirectiveOptionsException,
                configurable: true,
                enumerable: true,
                writable: true
            }
        }
    );

    DummyApp.constructors.DirectiveOptionsException.prototype.toString = function() {
        return '[DirectiveOptionsException: ' + this.message + ']';
    }
});