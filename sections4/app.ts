 // block scope

let myVar = "test";

 function reset() {
     console.log(myVar) // undefined 
     let myVar = "hello";
     console.log(myVar); // hello
 }  

reset();
console.log(myVar); // test

// In block scoping, let becomes local, contained in that function context, doesn't override the other myVar.  
// Also can't access let if it's not within the correct scope 

let myNum = function (val1, val2) {
    return val1 + val2;
}
console.log(myNum(5, 5));

let multiply = (val1, val2) => val1 * val2; 
console.log(multiply(2, 10));


// Default Parameters
// assigns the start variable with a default of 10 in case I didn't an argument in the calling code 
const countDown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--; 
    }
    console.log("Done!", start);
}
countDown(100);

// Rest, can take all of the arguments and put them into one array
// Rather than doing (arg1, arg2, arg3) etc.  

function makeArray(...args: number[]): number[] {
    return args;
}
console.log(makeArray(1, 2, 3, 4)); 

// Destructuring 
const myHobbies = ['guitar', 'fishing'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2) // guitar, fishing 

// Template Literals 

let myFirstName = "Ryan";
let theGreeting = ` Hello there ${myFirstName}`;
console.log(theGreeting);


const double = (value) => value * 2; 

const greet = (name: string = "Max") => {
    console.log(`Hello ${name}`);
}

console.log(Math.min(...numbers))

newArray.push(...numbers);

let [result1, result2, result3] = testResults;
console.log(result1, result2, result3)