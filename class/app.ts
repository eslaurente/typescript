class Person {
    name: string;
    userName: string;
    private _type: string = 'DEFAULT';
    protected age: number;

    constructor(name: string, userName: string) {
        this.name = name;
        this.userName = userName;
    }
}

const person = new Person('Emerald', 'eslaurente');
console.log(person);
