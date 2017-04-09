export class Student implements IPerson {
    constructor(private firstName: string = '',
                private lastName: string = '',
                private age: number = 0) {}

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge(): number {
        return this.age;
    }
}