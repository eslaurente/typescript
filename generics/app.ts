/** SIMPLE GENERIC */
function echo(data: any) {
    return data;
}
console.log(echo('Emerald ' + 28));
console.log(echo({ name: 'Emerald', age: 28}));


/** BETTER GENERIC */
function betterEcho<T>(data: T): T {
    return data;
}
console.log(betterEcho('A String Value').toUpperCase());
// console.log(betterEcho('1234').toFixed(3); // ERROR
console.log(betterEcho({ someString: 'Some String', someNumber: 99 }).someString.toUpperCase());
console.log(betterEcho<Number>(1024.0014).toFixed(0));


/** BUILT-IN GENERICS - Array Generic */
const testResults: Array<Number> = [1.19, 1024, 3479];
// testResults.push('4347'); // ERROR
testResults.push(0);


/** ARRAYS GENERICS */
function printAll<T>(args: T[]): void {
    args.forEach((element) => console.log(element));
}
// printAll('NOT AN ARRAY'); // ERROR
// printAll<Array<String>([34, 79, 97, 99]) // ERROR
printAll<String>(['34', '79', '97', '99']);


/** GENERIC FUNCTION TYPES */
const genericFuncType: <T>(data: T) => T = betterEcho;
console.log(genericFuncType('Generic Function Type to lowercase').toLowerCase());


/** GENERIC CLASS */
class SimpleMath<T extends number, U extends number | string> {
    constructor(public baseValue: T, public multiplier: U) {}
    calculate(): number {
        return Number(this.baseValue) * Number(this.multiplier);
    }
}
// const simpleMath = new SimpleMath('10', '20'); // ERROR
// const simpleMath = new SimpleMath<number | string | boolean>(10, 20); // ERROR: boolean not allowed
const simpleMath = new SimpleMath<number, string>(10, '20');
console.log(simpleMath.calculate());
simpleMath.baseValue = 10;
simpleMath.multiplier = '16';
console.log(simpleMath.calculate());