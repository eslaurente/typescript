// ** string **
var myName = 'Emerald';
// myName = 28; <- error
// ** number **
var myAge = 27;
// myAge = 'Max'; <- error
// ** boolean **
var hasHobbies = false;
// hasHobbies = 1; <- error
// ** assign types **
var myRealAge;
myRealAge = 27;
// myRealAge = '27'; <- error
// ** array **
var hobbies = ['Cooking', 'Sports'];
logArray(hobbies);
hobbies = ['100'];
logArray(hobbies);
// ** tuples **
var address = ['Super Street', 99];
logArray(address);
// ** enum **
var Color;
(function (Color) {
    Color[Color["GREY"] = 0] = "GREY";
    Color[Color["GREEN"] = 100] = "GREEN";
    Color[Color["BLUE"] = 101] = "BLUE"; // 101
})(Color || (Color = {}));
var myColor = Color.BLUE;
console.log(myColor);
// ** any **
var car = 'BMW';
console.log(car);
car = { brand: 'Ford', series: 3 };
// ** function **
function returnName() {
    return myName;
}
console.log(returnName());
// ** function: argument types **
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(3, 100));
// ** function types **
var aFunction;
aFunction = multiply;
// console.log(aFunction());  // compile error
console.log(aFunction(5, 2)); // 10
// ** objects **
var userData = {
    name: 'Emerald',
    age: 28
};
// userData = {}; // compile error:  Type '{}' is not assignable to type '{ name: string; age: number; }'.
// userData = {
//     a: 'Laurente', // compile error: Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.
//     b: '33'
// };
// ** complex objects **
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
var complex2 = {
    data: [10, 24, 1988],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.output(true));
// ** union types **
var realAge;
realAge = 28.00;
realAge = '28.00';
// realAge = true;  // compile error
// ** checking type **
var finalValue = 'A String';
if (typeof finalValue === 'string') {
    console.log('finalValue is a string!');
}
else if (typeof finalValue === 'number') {
    console.log('fileValue is a number!');
}
// ** never type ** 
// 
function throwsAndNeverReturns() {
    throw new Error('An error occurred!');
}
// throwsAndNeverReturns();
// ** nullable types **
// NOTE: tsc option: "strictNullChecks" is true
var canBeNull = 12;
canBeNull = null;
// canBeNull = undefined;  // error TS2322: Type 'undefined' is not assignable to type 'number | null'
var canBeUndefined; // val === undefined
canBeUndefined = 'undefined string';
// canBeUndefined = null;  // error TS2322: Type 'null' is not assignable to type 'string | undefined'.
var canOnlyBeNull = null;
// canOnlyBeNull = 13;  // error TS2322: Type '13' is not assignable to type 'null'.
/**
 * Helper function to print array items
 * @param list
 */
function logArray(list) {
    list.forEach(function (item) {
        console.log(item);
    });
}
