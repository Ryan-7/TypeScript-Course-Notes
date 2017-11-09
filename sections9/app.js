// Decorators - A TypeScript feature, not an Angular feature!!
// A decorator is just a function, nothing special. 
// Typescript passes one argument when attached to clases and it is the constructor function of that class, named whatever you want
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = (function () {
    function Person() {
        console.log("Hi!");
    }
    return Person;
}());
Person = __decorate([
    logged
], Person);
// Factory
// Needs to return a function that can be used as a decorator 
// Returning the logged function or null
function logging(value) {
    if (value) {
        return logged;
    }
    else {
        return null;
    }
}
// Not REALLY attaching the logging function, we're attaching the logging result, which is null or the logged function depending on what we pass
// In the end we can really only attach the logged function because it gets the constructor 
var Car = (function () {
    function Car() {
    }
    return Car;
}());
Car = __decorate([
    logging(true)
], Car);
// Advanced Decorators
// The constructor function is really the blueprint
// The constructor is in the background, class is just syntatic sugar
// what is really being recieved when we pass the constructor as an arugment: 
/*
function Plant() {
    name = "Green Plant";
}

*/
// Attach a method to the class Plant using the prototype, so now it's available to all instances. 
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
    constructorFn.prototype.type = "Tree";
}
var Plant = (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    return Plant;
}());
Plant = __decorate([
    logging(true),
    printable
], Plant);
var plant = new Plant();
plant.print();
console.log(plant.type);
// Attached a decorator that received the class, then attached a method via the prototype
// Then we used that method to print itself, the new instance 
// So this shows that after a class has been made, we can use a decorator to modify that class
// and all of its instances too. 
/*

Summary:

Decorators are just functions
You can add multiple decorators to classes
Class decorators must receive the constructor as the argument.
You can add a function as a decorator that returns another function
You can modify the constructor(class) with the prototype using a decorator

*/
// Method Decorator 
// Takes different arguments, not the constructor function like with class decorators 
// Use a factory so we can pass a value 
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    return Project;
}());
__decorate([
    overwritable(false)
], Project.prototype, "projectName", void 0);
__decorate([
    editable(false)
], Project.prototype, "calcBudget", null);
var project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
// Returning the function anyway, unlike the other example where we may return null 
// @editable(false) is essentially descriptor.writable = false;
