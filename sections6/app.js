// Import - ES6 and TypeScript feature
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(circle_1.PI);
console.log(circle_1.calculateCircumference(5));
console.log(rectangle_1.calculateRectangle(5, 5));
// // ~~namespaces~~ 
// // Good for splitting up code, organization and having multiple namespaces 
// // Similar to an object: https://jsfiddle.net/bz5pz6km/
// // This isn't importing like with modules!! This is how to import namespaces 
// /// <reference path="circleMath.ts" />
// /// <reference path="rectangleMath.ts" />
// const PI = 3.43 // No errors, because the other PI variable is local to that namespace. 
// console.log(MyMath.calculateRectangle(10,20))
// console.log(MyMath.Circle.calculateCircumference(5));
// console.log(PI);
// // tsc app.ts --outFile app.js
// // Combines all of the files  
