// Types do not exist in the JavaSciprt after compiling, TypeScript simply checks the types before compiling. 
// strings, simply a string
var myName = "Ryan";
// If you don't set a value when declaring a variable, it is assigned type any: 
// let myAge; 
var myAge;
// array
// can use any[] to tell typescript the contents of the array could be strings at the start but change to numbers, etc. 
var myHobbies = ["guitar", "fishing"];
var myLuckyNum = [3, 5, 6];
// tuples - arrays with mixed types and limited number of items. Such as for an address 
var address = ["someStreet", 34];
// enum, basically used to encode something into numbers for easier coding 
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101, continues incrementing from the previous number
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // returns 100 
// any, can be of type any, avoid if possible 
var car = "BMW";
car = { brand: "BMW", series: 3 };
// Functions, the type assigned always refers to the return value 
function returnMyName() {
    return myName; // a string 
}
console.log(returnMyName());
// void, it means nothing is returned and will return error if something is returned 
function sayHello() {
    console.log("hi");
}
var sayHi;
sayHi = sayHello;
// types are placed in the parameter of the actual function, not the calling code 
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 5));
// function types, the function arguments and what it returns 
var myMultiply;
myMultiply = multiply;
// object types, property names must remain the same  
var userData = {
    name: "Max",
    age: 27
};
var ryan = {
    name: "Ryan",
    age: 28
};
// union types, useful for picking between some types and omitting others. 
var myActualAge; // should be number or string, but NOT a boolean, array, etc. 
myActualAge = 27;
myActualAge = "twenty seven";
// myActualAge = false; // won't work 
console.log(typeof myActualAge); // string 
// check types, may be useful if you're not sure what values you're getting. Example, only want to perform a calculation
// when you're getting numbers.  
var finalValue = "some string";
if (typeof finalValue === "string") {
    console.log("string");
}
else {
    console.log("not string");
}
// never type, because this function never finishes, it's not returning nothing, it's never returning anything
function neverReturns() {
    throw new Error("an error");
}
// Nullable Types, can be explicit about what may be null or may never be null
var canBeNull = 12; // inferred by typescript as a number 
// canBeNull = null; // error 
var canAlsoBeNull; // value is undefined, of type 'any' by default 
canAlsoBeNull = null; // no problem setting to null 
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "cooking"]
};
myself.bankAccount.deposit(3000);
