var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRectangleArea(width, height) {
        return width * height;
    }
    MyMath.calcRectangleArea = calcRectangleArea;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
console.log("Circumference of d=80 circle: " + MyMath.calcCircumference(80));
console.log("Area of rectangle w=3, h=17: " + MyMath.calcRectangleArea(3, 17));
// outer namespace
var PI = 3.00;
console.log(PI);
