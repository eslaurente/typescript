var Person = (function () {
    function Person(name, userName) {
        this._type = 'DEFAULT';
        this.name = name;
        this.userName = userName;
    }
    return Person;
}());
var person = new Person('Emerald', 'eslaurente');
console.log(person);
