// Interfaces - They help catch errors, property names and types must match 
// Also makes it easier and faster by using the interface in multiple places 
// It's a "contract" -- gives requirements 
function greet(person) {
    console.log("Hello " + person.firstName);
}
var person = {
    firstName: "Ryan",
    age: 28,
    location: "Madison",
    greet: function (lastName) {
        console.log("Hi, I am " + lastName);
    }
};
greet(person);
person.greet("Ryan");
// Can create a class which implements the properties from the interface 
// It will make sure all of those conditions are fulfilled (all the properties and methods it implements)
// Now it makes sense why Angular requires implemenation for OnInit, etc. 
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
    };
    return Person;
}());
var myDoubleFunc; // define the interface 
myDoubleFunc = function (val1, val2) {
    return val1 * val2;
};
