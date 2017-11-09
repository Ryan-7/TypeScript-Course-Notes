// block scope
var myVar = "test";
function reset() {
    console.log(myVar); // undefined 
    var myVar = "hello";
    console.log(myVar); // hello
}
reset();
console.log(myVar); // test
// In block scoping, let becomes local, contained in that function context, doesn't override the other myVar.  
// Also can't access let if it's not within the correct scope 
var myNum = function (val1, val2) {
    return val1 + val2;
};
console.log(myNum(5, 5));
var multiply = function (val1, val2) { return val1 * val2; };
console.log(multiply(2, 10));
// Default Parameters
// assigns the start variable with a default of 10 in case I didn't an argument in the calling code 
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown(100);
// Rest, can take all of the arguments and put them into one array
// Rather than doing (arg1, arg2, arg3) etc.  
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 4));
// Destructuring 
var myHobbies = ['guitar', 'fishing'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2); // guitar, fishing 
// Template Literals 
var myFirstName = "Ryan";
var theGreeting = " Hello there " + myFirstName;
console.log(theGreeting);
