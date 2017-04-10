/** SIMPLE DECORATOR */
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor(readonly name = 'PERSON') {}
}


/** FACTORY DECORATOR */
function logging(value: boolean): any {
    return value ? logged : null;
}

@logging(true)
class Car {
    constructor(readonly name = 'CAR') {}
}


/** ADVANCED DECORATOR */
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log('PRINT method from: ', this);
    }
}

@printable
@logging(true)  // ** MULTIPLE DECORATORS **
class Plant {
    name = 'GREEN PLANT';
}
const plant = new Plant();
if ((plant as any).print instanceof Function) {
    (plant as any).print();
}

// ** OUTPUT **
// function Person(name) {
//         if (name === void 0) { name = 'PERSON'; }
//         this.name = name;
//     }
// app.js:9 function Car(name) {
//         if (name === void 0) { name = 'CAR'; }
//         this.name = name;
//     }
// app.js:9 function Plant() {
//         this.name = 'GREEN PLANT';
//     }
// app.js:38 PRINT method from:  Plant {name: "GREEN PLANT"}