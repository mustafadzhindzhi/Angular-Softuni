var a = 1;
console.log(a * 2);
var text = 'Hello!';
// console.log(text);
var hasCats = true;
// console.log(hasCats);
// number[] <=> Array<number>
// let numberArray: number[] = [1,2,3,4]
var alphabetStr = ["1", "2", "3", "4"];
// alphabetStr.forEach(str => {
//     console.log(str);
// })
var x = 1; //do not use
x = "test";
x = { name: "Pesho" };
var anotherNumber = 1; //all type number 
var otherNumber = 1; //number - type number from age
var person1 = { name: 'Pesho1', age: 1 };
var person2 = { name: "Pesho2", age: 1 };
var Person = /** @class */ (function () {
    function Person() {
        this.greeting = 'Hello';
        this.age = 13;
    }
    Person.prototype.greet = function () {
        console.log(this.greeting);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p = new Person();
p.greet();
var age = p.getAge();
console.log(age);
var dog = { id: 1, name: 'Roshko' };
var do2 = { id: 'abcd', name: 'Roshko' };
var dog3 = {
    id: { id: 1, name: 'Roshko' },
    name: "Roshko"
};
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Successfull"] = 200] = "Successfull";
    PaymentStatus[PaymentStatus["Failed"] = 500] = "Failed";
    PaymentStatus[PaymentStatus["Pending"] = 304] = "Pending"; //2
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.Successfull);
console.log(PaymentStatus.Failed);
console.log(PaymentStatus.Pending);
