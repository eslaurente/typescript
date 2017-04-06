System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function calcCircumference(diameter) {
        return PI * diameter;
    }
    exports_1("calcCircumference", calcCircumference);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
