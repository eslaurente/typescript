System.register(["./math/circle", "./math/rectangle.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CircleMath, RectangleMath;
    return {
        setters: [
            function (CircleMath_1) {
                CircleMath = CircleMath_1;
            },
            function (RectangleMath_1) {
                RectangleMath = RectangleMath_1;
            }
        ],
        execute: function () {
            console.log(CircleMath.PI);
            console.log(CircleMath.calcCircumference(34));
            console.log(RectangleMath.calcRectangle(43, 23));
        }
    };
});
