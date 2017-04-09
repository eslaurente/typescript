//// <reference path="./IPerson" />
//// <reference path="./IDoubleVAlueFunc" />


import { Student } from './Student';

function greet(person: IPerson): void {
    console.log(person.greet());
    
}

const student = new Student('Emerald', 'Laurente', 28);

greet(student);

/** FUNCTION TYPES */
const myDoublingFunction: IDoubleValueFunc = function(value1: number, value2: number): number {
    return (value1 + value2) * 2;
};


console.log(myDoublingFunction(10, 20));