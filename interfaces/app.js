System.register(["./Student", "./RetiringPerson"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function greet(person) {
        console.log(person.greet());
        if (person instanceof RetiringPerson_1.RetiringPerson) {
            console.log("\t Is of retiring age: " + person.isRetiring());
        }
    }
    var Student_1, RetiringPerson_1, student, myDoublingFunction, oldPerson, olderPerson;
    return {
        setters: [
            function (Student_1_1) {
                Student_1 = Student_1_1;
            },
            function (RetiringPerson_1_1) {
                RetiringPerson_1 = RetiringPerson_1_1;
            }
        ],
        execute: function () {
            student = new Student_1.Student('Emerald', 'Laurente', 28);
            greet(student);
            /** FUNCTION TYPES */
            myDoublingFunction = function (value1, value2) {
                return (value1 + value2) * 2;
            };
            console.log("(10 + 20) * 2 = " + myDoublingFunction(10, 20));
            /** INTERFACE INHERITANCE */
            oldPerson = new RetiringPerson_1.RetiringPerson('Vanessa', 'Carlton', 63);
            olderPerson = new RetiringPerson_1.RetiringPerson('Tom', 'Attom', 82);
            ;
            greet(oldPerson);
            greet(olderPerson);
        }
    };
});
