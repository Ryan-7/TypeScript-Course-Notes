// Basically Generics tell the IDE and TypeScript to watch for types 

// Simple Generic Function
// It would be nice if TypeScript was aware of the datatype received in the function.

function echo(data: any) {
    return data; 
}

console.log(echo("Ryan"));
console.log(echo(27))
console.log(echo({name: "Ryan", age: 28}))


// Better Generic Functions 
// <T> tells TypeScript that this is a generic function. When using this function, give me the type. 
// data: T     data is of type "T"

function betterEcho <T>(data: T) {
    return data; 
}

// Now if if I use my IDE for help, it will work, like showing .length for string, .toFixed for number, etc. 
// Makes the code flexible and yet manageable by the IDE. 

console.log(betterEcho("Ryan").length);
console.log(betterEcho(27).toFixed)
console.log(betterEcho({name: "Ryan", age: 28}))


// Built-in Generics 
// The array elements must be of type number 
// <string>, <boolean>, <any>, etc.
// Tell the IDE and TS to complain if it's not correct  

const testResults: Array<number> = [1.94, 2.33];
testResults.push(2.99);
testResults.push("string") // IDE complains 

// Arrays 
function printAll<T>(args: T[]) { // It is a generic function and the data received is an array. The type is unknown. 
    args.forEach((element) => {
        console.log(element); 
    })
}

printAll<string>(["Banana", "Apple"]) // Telling TypeScript it is strings, we already specified it's an array in the parameter.


// If we DID know the datatype, we would do this: 
function printAll2(data: string[]) {   
}


// Generic Types 
// Telling this variable that the function assigned will be of this type: 
// <T>(data: T) => T  // A generic function that returns data of the Type received 
const echo2: <T>(data: T) => T = betterEcho; 
console.log(echo2<string>("Ryan"))


// Generic Class 

class SimpleMath<T extends number | string, U extends number | string> {  // Which types can be used 
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // + changes it to a number  
    }
}

const simpleMath = new SimpleMath<string, number>(); // No constructor to set the values initially with the new keyword 
simpleMath.baseValue = "10";   // Can set them this way instead. 
simpleMath.multiplyValue = 20; 
console.log(simpleMath.calculate());



// Exercise 

class MyMap {
    items = [
        {key: "Banana", value: 3},
        {key: "Orange", value: 6},
    ];

    setItem(key: string, value: number): void  {
        let someObj = {
            key: key,
            value: value,
        }
        this.items.push(someObj);
    }

    getItem(key: string) {
       const test = this.items.filter((element) => {
          return element.key === key; 
       }).map(element => {
           return element.value; 
       })

       console.log(test);
    }

    clear() {
        this.items = []; 
    }

    printMap() {
        this.items.forEach((element) => {
            console.log(element);
        })
    }
}

const numberMap = new MyMap();
numberMap.setItem("apple", 15)
numberMap.printMap();
numberMap.getItem("Banana");
