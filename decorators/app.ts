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
// function Car(name) {
//         if (name === void 0) { name = 'CAR'; }
//         this.name = name;
//     }
// function Plant() {
//         this.name = 'GREEN PLANT';
//     }
// PRINT method from:  Plant {name: "GREEN PLANT"}


/** METHOD DECORATOR */
function editable(value: boolean): any {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Project {
    constructor(public projectName: string) {}

    @editable(false)
    calcBudget() { console.log(1000); }
}
const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = () => console.log(2000);
project.calcBudget();
