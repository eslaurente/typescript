// ** string **
let myName = 'Emerald';
// myName = 28; <- error

// ** number **
let myAge = 27;
// myAge = 'Max'; <- error

// ** boolean **
let hasHobbies = false;
// hasHobbies = 1; <- error

// ** assign types **
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27'; <- error

// ** array **
let hobbies = ['Cooking', 'Sports'];
logArray(hobbies);
hobbies = ['100'];
logArray(hobbies);

// ** tuples **
let address: [string, number] = ['Super Street', 99];
logArray(address);

// ** enum **
enum Color {
    GREY,        // 0
    GREEN = 100, // 100
    BLUE         // 101
}
let myColor: Color = Color.BLUE;
console.log(myColor);


// ** any **
let car: any = 'BMW';
console.log(car);
car = { brand: 'Ford', series: 3 };


// ** function **
function returnName(): string {
    return myName;
}
console.log(returnName());

// ** function: argument types **
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}
console.log(multiply(3, 100));

// ** function types **
let aFunction: (val1: number, val2: number) => number;
aFunction = multiply;
// console.log(aFunction());  // compile error
console.log(aFunction(5, 2)); // 10

// ** objects **
let userData: { name: string, age: number } = {
    name: 'Emerald',
    age:  28
};
// userData = {}; // compile error:  Type '{}' is not assignable to type '{ name: string; age: number; }'.

// userData = {
//     a: 'Laurente', // compile error: Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.
//     b: '33'
// };


// ** complex objects **
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data:   [100, 3.99, 10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};
console.log(complex.output(true));

// ** type alias **
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data:   [10, 24, 1988],
    output: function(all: boolean): number[] {
        return this.data;
    }
}
console.log(complex2.output(true));

// ** union types **
let realAge: string | number;
realAge = 28.00;
realAge = '28.00';
// realAge = true;  // compile error

// ** checking type **
let finalValue = 'A String';
if (typeof finalValue === 'string') {
    console.log('finalValue is a string!');
}
else if (typeof finalValue === 'number') {
    console.log('fileValue is a number!');
    
}

// ** never type ** 
// 
function throwsAndNeverReturns(): never {
    throw new Error('An error occurred!');
}
// throwsAndNeverReturns();

// ** nullable types **
// NOTE: tsc option: "strictNullChecks" is true
let canBeNull: number | null = 12;
canBeNull = null;
// canBeNull = undefined;  // error TS2322: Type 'undefined' is not assignable to type 'number | null'

let canBeUndefined: string | undefined; // val === undefined
canBeUndefined = 'undefined string';
// canBeUndefined = null;  // error TS2322: Type 'null' is not assignable to type 'string | undefined'.

let canOnlyBeNull = null;
// canOnlyBeNull = 13;  // error TS2322: Type '13' is not assignable to type 'null'.

/**
 * Helper function to print array items
 * @param list
 */
function logArray(list: any[]): void {
    list.forEach((item: any) => {
        console.log(item);
    });
}