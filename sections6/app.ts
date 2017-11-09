// Import - ES6 and TypeScript feature

// Can import everything from a file: 
// import * as Circle from './math/circle';

import { PI, calculateCircumference } from './math/circle';
import { calculateRectangle } from './math/rectangle';

// console.log(Circle.PI); 
console.log(PI);
console.log(calculateCircumference(5));
console.log(calculateRectangle(5, 5)); 



/*

To use modules, must export them and import them and use them as if they're a part of this JS file. 

Can be split over multiple files for easy organization.

Must use a modular loader, such as systemJS, since modular loading is not supported by all browsers yet.


*/












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