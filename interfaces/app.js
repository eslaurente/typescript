//// <reference path="./IPerson" />
System.register(["./Student"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function greet(person) {
        console.log("Hello " + person.getFullName() + ". Your age is " + person.getAge() + ".");
    }
    var Student_1, student;
    return {
        setters: [
            function (Student_1_1) {
                Student_1 = Student_1_1;
            }
        ],
        execute: function () {//// <reference path="./IPerson" />
            student = new Student_1.Student('Emerald', 'Laurente', 28);
            greet(student);
        }
    };
});
