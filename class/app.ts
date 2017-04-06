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

/** SETTERS & GETTERS */
class Plant {
    private speciesDefault: string = 'DEFAULT';
    private _species: string = this.speciesDefault;

    set species(val: string) {
        if (val.length > 3) {
            this._species = val;
        }
        else {
            this._species = this.speciesDefault;
        }
    }

    get species() {
        return this._species;
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'Asparagus';
console.log(plant.species);

/** STATIC PROPERTIES & METHODS */
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(`The number pi: ${Helpers.PI}`);
console.log(`The circumference of a cirlce with a diameter of 8 units is: ${Helpers.calcCircumference(8)}`);

