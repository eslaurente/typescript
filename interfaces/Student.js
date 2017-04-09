System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Student;
    return {
        setters: [],
        execute: function () {
            Student = (function () {
                function Student(_firstName, _lastName, _age) {
                    if (_firstName === void 0) { _firstName = ''; }
                    if (_lastName === void 0) { _lastName = ''; }
                    if (_age === void 0) { _age = 0; }
                    this._firstName = _firstName;
                    this._lastName = _lastName;
                    this._age = _age;
                }
                Object.defineProperty(Student.prototype, "firstName", {
                    get: function () {
                        return this._firstName;
                    },
                    set: function (value) {
                        this._firstName = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Student.prototype, "lastName", {
                    get: function () {
                        return this._lastName;
                    },
                    set: function (value) {
                        this._lastName = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Student.prototype, "age", {
                    get: function () {
                        return this._age;
                    },
                    set: function (value) {
                        this._age = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Student.prototype.getFirstName = function () {
                    return this.firstName;
                };
                Student.prototype.getLastName = function () {
                    return this.lastName;
                };
                Student.prototype.getFullName = function () {
                    return this.firstName + " " + this.lastName;
                };
                Student.prototype.getAge = function () {
                    return this.age;
                };
                Student.prototype.greet = function () {
                    return "Hello " + this.firstName + ". Your age is " + this.age + ".";
                };
                return Student;
            }());
            exports_1("Student", Student);
        }
    };
});
