// Basically Generics tell the IDE and TypeScript to watch for types 
// Simple Generic Function
// It would be nice if TypeScript was aware of the datatype received in the function.
function echo(data) {
    return data;
}
console.log(echo("Ryan"));
console.log(echo(27));
console.log(echo({ name: "Ryan", age: 28 }));
// Better Generic Functions 
// <T> tells TypeScript that this is a generic function. When using this function, give me the type. 
// data: T     data is of type "T"
function betterEcho(data) {
    return data;
}
// Now if if I use my IDE for help, it will work, like showing .length for string, .toFixed for number, etc. 
// Makes the code flexible and yet manageable by the IDE. 
console.log(betterEcho("Ryan").length);
console.log(betterEcho(27).toFixed);
console.log(betterEcho({ name: "Ryan", age: 28 }));
// Built-in Generics 
// The array elements must be of type number 
// <string>, <boolean>, <any>, etc.
// Tell the IDE and TS to complain if it's not correct  
var testResults = [1.94, 2.33];
testResults.push(2.99);
testResults.push("string"); // IDE complains 
// Arrays 
function printAll(args) {
    args.forEach(function (element) {
        console.log(element);
    });
}
printAll(["Banana", "Apple"]); // Telling TypeScript it is strings, we already specified it's an array in the parameter.
// If we DID know the datatype, we would do this: 
function printAll2(data) {
}
// Generic Types 
// Telling this variable that the function assigned will be of this type: 
// <T>(data: T) => T  // A generic function that returns data of the Type received 
var echo2 = betterEcho;
console.log(echo2("Ryan"));
// Generic Class 
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + changes it to a number  
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath(); // No constructor to set the values initially with the new keyword 
simpleMath.baseValue = "10"; // Can set them this way instead. 
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// Exercise 
var MyMap = (function () {
    function MyMap() {
        this.items = [
            { key: "Banana", value: 3 },
            { key: "Orange", value: 6 },
        ];
    }
    MyMap.prototype.setItem = function (key, value) {
        var someObj = {
            key: key,
            value: value,
        };
        this.items.push(someObj);
    };
    MyMap.prototype.getItem = function (key) {
        var test = this.items.filter(function (element) {
            return element.key === key;
        }).map(function (element) {
            return element.value;
        });
        console.log(test);
    };
    MyMap.prototype.clear = function () {
        this.items = [];
    };
    MyMap.prototype.printMap = function () {
        this.items.forEach(function (element) {
            console.log(element);
        });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apple", 15);
numberMap.printMap();
numberMap.getItem("Banana");
