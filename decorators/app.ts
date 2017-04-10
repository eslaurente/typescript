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