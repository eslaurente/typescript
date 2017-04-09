
import { Student } from './Student';
import { IPerson } from "./IPerson";
import { IDoubleValueFunc } from "./IDoubleValueFunc";
import { IAgedPerson } from './IAgedPerson';
import { RetiringPerson } from "./RetiringPerson";


function greet(person: IPerson): void {
    console.log(person.greet());
    
    if (person instanceof RetiringPerson) {
        console.log(`\t Is of retiring age: ${person.isRetiring()}`);
    }
}

const student = new Student('Emerald', 'Laurente', 28);

greet(student);

/** FUNCTION TYPES */
const myDoublingFunction: IDoubleValueFunc = function(value1: number, value2: number): number {
    return (value1 + value2) * 2;
};

console.log(`(10 + 20) * 2 = ${myDoublingFunction(10, 20)}`);

/** INTERFACE INHERITANCE */
const oldPerson: IAgedPerson = new RetiringPerson('Vanessa', 'Carlton', 63);
const olderPerson: IAgedPerson = new RetiringPerson('Tom', 'Attom', 82);;

greet(oldPerson);
greet(olderPerson);