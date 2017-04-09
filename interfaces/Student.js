System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Student;
    return {
        setters: [],
        execute: function () {
            Student = (function () {
                function Student(firstName, lastName, age) {
                    if (firstName === void 0) { firstName = ''; }
                    if (lastName === void 0) { lastName = ''; }
                    if (age === void 0) { age = 0; }
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                }
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
                return Student;
            }());
            exports_1("Student", Student);
        }
    };
});
