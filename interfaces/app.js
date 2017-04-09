//// <reference path="./IPerson" />
//// <reference path="./IDoubleVAlueFunc" />
System.register(["./Student"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function greet(person) {
        console.log(person.greet());
    }
    var Student_1, student, myDoublingFunction;
    return {
        setters: [
            function (Student_1_1) {
                Student_1 = Student_1_1;
            }
        ],
        execute: function () {//// <reference path="./IPerson" />
            //// <reference path="./IDoubleVAlueFunc" />
            student = new Student_1.Student('Emerald', 'Laurente', 28);
            greet(student);
            /** FUNCTION TYPES */
            myDoublingFunction = function (value1, value2) {
                return (value1 + value2) * 2;
            };
            console.log(myDoublingFunction(10, 20));
        }
    };
});
