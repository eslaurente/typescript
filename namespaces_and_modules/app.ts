/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import MM = MyMath;

console.log(`Circumference of d=80 circle: ${MM.calcCircumference(80)}`);
console.log(`Area of rectangle w=3, h=17: ${MM.calcRectangleArea(3, 17)}`);

// outer namespace
const PI: number = 3.00;
console.log(PI);

