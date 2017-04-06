var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** CLASSES */
var Person = (function () {
    function Person(name, userName, age) {
        this._type = 'DEFAULT';
        this.name = name;
        this.userName = userName;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setType = function (type) {
        this._type = type;
    };
    Person.prototype.getType = function () {
        return this._type;
    };
    return Person;
}());
var person = new Person('Max', 'max1234', 24);
person.setType('Administrator');
console.log(person);
console.log("Name: " + person.name + " | User Name: " + person.userName + " | Age: " + person.getAge() + " | Type: " + person.getType());
/** INHERITANCE */
var Emerald = (function (_super) {
    __extends(Emerald, _super);
    function Emerald() {
        var _this = _super.call(this, '', '', 0) || this;
        _this.name = 'Emerald';
        _this.age = 28;
        _this.userName = 'eslaurente';
        _this.setType('Normal');
        return _this;
    }
    return Emerald;
}(Person));
var emerald = new Emerald();
console.log("Name: " + emerald.name + " | User Name: " + emerald.userName + " | Age: " + emerald.getAge() + " | Type: " + emerald.getType());
/** SETTERS & GETTERS */
var Plant = (function () {
    function Plant() {
        this.speciesDefault = 'DEFAULT';
        this._species = this.speciesDefault;
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (val) {
            if (val.length > 3) {
                this._species = val;
            }
            else {
                this._species = this.speciesDefault;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Asparagus';
console.log(plant.species);
