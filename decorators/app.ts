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


/** ADVANCED  */
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log('PRINT method from: ', this);
    }
}

@printable
class Plant {
    name = 'GREEN PLANT';
}
const plant = new Plant();
if ((plant as any).print instanceof Function) {
    (plant as any).print();
}
