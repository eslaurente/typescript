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
        console.log(this._type);
    }

    getType() {
        return this._type;
    }
}

const person = new Person('Emerald', 'eslaurente', 28);
person.setType('Administrator');
console.log(person);
console.log(`Name: ${person.name} | User Name: ${person.userName} | Age: ${person.getAge()} | Type: ${person.getType()}`);

