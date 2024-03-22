var a: number = 1;
console.log(a * 2);
let text: string = 'Hello!'
// console.log(text);
let hasCats = true;
// console.log(hasCats);

// number[] <=> Array<number>
// let numberArray: number[] = [1,2,3,4]
let alphabetStr: Array<string> = ["1", "2", "3", "4"]

// alphabetStr.forEach(str => {
//     console.log(str);
// })

let x: any = 1; //do not use
x = "test";
x = { name: "Pesho" }

type Person1 = {
    name: string,
    age: number,
}

interface Person2 {
    name: string,
    age: number;
}

let anotherNumber: Number = 1; //all type number 
let otherNumber: number = 1;  //number - type number from age

let person1: Person1 = { name: 'Pesho1', age: 1 }
let person2: Person2 = { name: "Pesho2", age: 1 }

// const arr:any = [true, "string", 1]

// let randomVar : number | string = 'zdr';
// randomVar = 5;

// let numArray = [1,2,3];
// numArray.push(1)

type Cat = {
    name: string,
    furColor: string,
}

type Dragon = {
    skinColor: string,
    legsCount: number
}

// const obj: Dragon | number[] = [1,2,3,4];

interface Human {
    privategreeting: string,
    green: () => void;
}

class Person {
    private greeting = 'Hello'
    age = 13;

    public greet(): void {
        console.log(this.greeting);
    }

    getAge(): number {
        return this.age
    }
}

const p = new Person();
p.greet();
const age = p.getAge();
console.log(age);

type Dog<T> = {
    id: T,
    name: string
}

const dog: Dog<number> = { id: 1, name: 'Roshko' }
const do2: Dog<string> = { id: 'abcd', name: 'Roshko' }
const dog3: Dog<Dog<number>> = {
    id: { id: 1, name: 'Roshko' },
    name: "Roshko"
}

enum PaymentStatus {
    Successfull = 200,  //0
    Failed = 500, //1
    Pending = 304 //2
}

console.log(PaymentStatus.Successfull);
console.log(PaymentStatus.Failed);
console.log(PaymentStatus.Pending);

