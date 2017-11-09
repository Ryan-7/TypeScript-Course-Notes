// Types do not exist in the JavaSciprt after compiling, TypeScript simply checks the types before compiling. 

// strings, simply a string
let myName: string = "Ryan"; 

// If you don't set a value when declaring a variable, it is assigned type any: 
// let myAge; 
let myAge: number;

// array
// can use any[] to tell typescript the contents of the array could be strings at the start but change to numbers, etc. 
let myHobbies: string[] = ["guitar", "fishing"];
let myLuckyNum: number[] = [3, 5, 6]; 
 
// tuples - arrays with mixed types and limited number of items. Such as for an address 
let address: [string, number, boolean] = ["someStreet", 34, false]; 

// enum, basically used to encode something into numbers for easier coding 

enum Color { 
    Gray, // 0
    Green = 100, // 100
    Blue // 101, continues incrementing from the previous number
}

let myColor: Color = Color.Green; 
console.log(myColor); // returns 100 

// any, can be of type any, avoid if possible 
let car: any = "BMW";
car = {brand: "BMW", series: 3}; 


// Functions, the type assigned always refers to the return value 
function returnMyName(): string {
    return myName; // a string 
}
console.log(returnMyName())

// void, it means nothing is returned and will return error if something is returned 
function sayHello(): void {
    console.log("hi");
}

let sayHi: () => void; 
sayHi = sayHello; 

// types are placed in the parameter of the actual function, not the calling code 
function multiply(value1: number, value2: number):  number {
    return value1 * value2;
}
console.log(multiply(5, 5)); 

// function types, the function arguments and what it returns 

let someFunc: () => void; 

let myMultiply: (val1: number, val2: number) => number; 
myMultiply = multiply;

// object types, property names must remain the same  
let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
}

// types AND property names matter, this won't work: 

// userData = {
//     a: "hello",
//     b: 32
// }


// use 'type' keyword to create an alias to store a type 

type myCustomType = { name: string, age: number }; 

let ryan: myCustomType = {
    name: "Ryan",
    age: 28
}

// union types, useful for picking between some types and omitting others. 

let myActualAge: number | string;  // should be number or string, but NOT a boolean, array, etc. 
myActualAge = 27;
myActualAge = "twenty seven";
// myActualAge = false; // won't work 
console.log(typeof myActualAge); // string 


// check types, may be useful if you're not sure what values you're getting. Example, only want to perform a calculation
// when you're getting numbers.  

let finalValue = "some string";
if (typeof finalValue === "string") {
    console.log("string");
}
else {
    console.log("not string");
}


// never type, because this function never finishes, it's not returning nothing, it's never returning anything

function neverReturns(): never {
    throw new Error("an error");
}


// Nullable Types, can be explicit about what may be null or may never be null
let canBeNull = 12;  // inferred by typescript as a number 
// canBeNull = null; // error 

let canAlsoBeNull; // value is undefined, of type 'any' by default 
canAlsoBeNull = null; // no problem setting to null 


// Example of being very explicit 


type depositAlias = (val: number) => void; 

let bankAccount: { money: number, deposit: depositAlias} = {
    money: 2000,
    deposit (value: number) {
        this.money += value;
    }
}


let myself: { name: string, bankAccount: { money: number, deposit: depositAlias }, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "cooking"]
}

myself.bankAccount.deposit(3000); 
