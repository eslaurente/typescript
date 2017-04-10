
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

