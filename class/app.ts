/** CLASSES */
class Person {
    name: string;
    userName: string;
    private _type: string = 'DEFAULT';
    protected age: number;

    constructor(name: string, userName: string, age: number) {
        this.name = name;
        this.userName = userName;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setType(type: string) {
        this._type = type;
    }

    getType() {
        return this._type;
    }
}

const person = new Person('Max', 'max1234', 24);
person.setType('Administrator');
console.log(person);
console.log(`Name: ${person.name} | User Name: ${person.userName} | Age: ${person.getAge()} | Type: ${person.getType()}`);

/** INHERITANCE */
class Emerald extends Person {
    constructor() {
        super('', '', 0);
        this.name = 'Emerald';
        this.age = 28;
        this.userName = 'eslaurente';
        this.setType('Normal');
    }
}
const emerald = new Emerald();
console.log(`Name: ${emerald.name} | User Name: ${emerald.userName} | Age: ${emerald.getAge()} | Type: ${emerald.getType()}`);

