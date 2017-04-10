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
function methodEditable(value: boolean): any {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

/** PROPERTY DECORATOR */
function propertyEditable(value: boolean): any {
    return function(target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @propertyEditable(false)
    public projectName: string

    constructor(name: string) {
        this.projectName = name;
    }

    @methodEditable(false)
    calcBudget() { console.log(1000); }
}
const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = () => console.log(2000);
project.calcBudget();
console.log(project);


/** PARAMETER DECORATOR */
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`Target: `, target);
    console.log(`methodName: ${methodName}`);
    console.log(`paramIndex: ${paramIndex}`);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
const course = new Course('Emerald Laurente');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);