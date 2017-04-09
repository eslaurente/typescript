import { IAgedPerson } from './IAgedPerson';

export class RetiringPerson implements IAgedPerson {
    private RETIRING_AGE: number = 64;

    constructor(private _firstName: string = '',
        private _lastName: string = '',
        private _age: number = 0) { }

    getRetirementAge(): number {
        return this.RETIRING_AGE;
    }

    isRetiring(): boolean {
        return this._age >= this.RETIRING_AGE;
    }

	public get firstName(): string  {
		return this._firstName;
	}

	public set firstName(value: string ) {
		this._firstName = value;
	}

	public get lastName(): string  {
		return this._lastName;
	}

	public set lastName(value: string ) {
		this._lastName = value;
	}

	public get age(): number  {
		return this._age;
	}

	public set age(value: number ) {
		this._age = value;
	}

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

    greet(): string {
        return `Hello ${this.firstName}. Your age is ${this.age}.`;
    }
}