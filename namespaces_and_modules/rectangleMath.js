var MyMath;
(function (MyMath) {
    function calcRectangleArea(width, height) {
        return width * height;
    }
    MyMath.calcRectangleArea = calcRectangleArea;
})(MyMath || (MyMath = {}));
