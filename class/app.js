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
        console.log(this._type);
    };
    Person.prototype.getType = function () {
        return this._type;
    };
    return Person;
}());
var person = new Person('Emerald', 'eslaurente', 28);
person.setType('Administrator');
console.log(person);
console.log("Name: " + person.name + " | User Name: " + person.userName + " | Age: " + person.getAge() + " | Type: " + person.getType());
