//// <reference path="./IPerson" />

import { Student } from './Student';

function greet(person: IPerson): void {
    console.log(`Hello ${person.getFullName()}. Your age is ${person.getAge()}.`);
    
}

const student = new Student('Emerald', 'Laurente', 28);

greet(student);