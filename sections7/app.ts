// Interfaces - They help catch errors, property names and types must match 
// Also makes it easier and faster by using the interface in multiple places 
// It's a "contract" -- gives requirements 


interface NamedPerson {
    firstName: string;
    age: number;
    [propName: string]: any; // if you don't know the name of a property, of type any 
    greet(lastName: string): void; // interface for functions and their parameters and return type
}

function greet(person: NamedPerson) {
    console.log(`Hello ${person.firstName}`)
}

const person = {
    firstName: "Ryan",
    age: 28,
    location: "Madison",
    greet(lastName: string) {
        console.log(`Hi, I am ${lastName}`);
    }
}

greet(person); 
person.greet("Ryan")

// Can create a class which implements the properties from the interface 
// It will make sure all of those conditions are fulfilled (all the properties and methods it implements)
// Now it makes sense why Angular requires implemenation for OnInit, etc. 


class Person implements NamedPerson {    
    firstName: string;
    age: number;

    greet() {

    }

  //  constructor(public firstName: string, public age: number) {}
  // Could also use a constructor to intialize the properties, just like I learned before, to match the interface 

}


// Function Types 
// Whatever function uses this interface, must follow this guideline 

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValueFunc;  // define the interface 

myDoubleFunc = function(val1: number, val2: number): number {  // set the function equal to the variable defined 
    return val1 * val2; 
}


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    location: string;
}

// This object is based on the AgedPerson interface, which inherited all of the properties and methods from the 
// NamedPerson interface, plus I added location, so the oldPerson object must fulfill all of the requirements of both. 

const oldPerson: AgedPerson = {
    firstName: "Jim",
    age: 34,
    greet() {

    },
    location: "Madison"

}


// In summary, you can create interfaces for objects, functions, classes, etc.
// You use interfaces on classes by using the keyword "implements" to ensure that class has the requirements from
// the interface, of course, you can also have more in the class than what's in the interface. 
// You can create child interfaces from parent interfaces which inherit all properties and methods and you can add
// other properties and methods that you see fit. 