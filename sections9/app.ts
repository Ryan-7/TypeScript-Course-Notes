// Decorators - A TypeScript feature, not an Angular feature!!
// A decorator is just a function, nothing special. 
// Typescript passes one argument when attached to clases and it is the constructor function of that class, named whatever you want


function logged(constructorFn: Function): void {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("Hi!");
    }
}


// Factory
// Needs to return a function that can be used as a decorator 
// Returning the logged function or null

function logging(value: boolean): any {
    if (value) {
        return logged;
    }
    else {
        return null; 
    }
}


// Not REALLY attaching the logging function, we're attaching the logging result, which is null or the logged function depending on what we pass
// In the end we can really only attach the logged function because it gets the constructor 

@logging(true) 
class Car {
    constructor() {
    }
}

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

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this); 
    }
    constructorFn.prototype.type = "Tree";
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();
console.log((<any>plant).type)
// Attached a decorator that received the class, then attached a method via the prototype
// Then we used that method to print itself, the new instance 

// So this shows that after a class has been made, we can use a decorator to modify that class
// and all of its instances too by adding methods and/or properties via the decorator 


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

function editable(value: boolean): Function {
    return function(target: any, propName: string, descriptor: PropertyDescriptor ) {
        descriptor.writable = value; 
    }
}


function overwritable(value: boolean): any {
    return function(target: any, propName: string) {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000); 
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {         // this is blocked, no error but nothing happens 
    console.log(2000);
}

// Returning the function anyway, unlike the other example where we may return null 
// @editable(false) is essentially descriptor.writable = false;




// Parameter Decorator

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string; 

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(1000);
        } else {
            console.log(200);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);


/*

So in Angular, @component({}) is calling a method called component, and passing an object as an argument. 
We know that what is returned must be a function matching one of the decorator signatures above. 

Perhaps it modifies the properties, methods or parameters. 

*/
