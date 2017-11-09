class Person {

    name: string = "Ryan"; 
    private age: number = 28;
    protected location: string; 

    constructor(name: string, public username: string) {
        this.name = name; 
    }


    setLocation(newLocation) {
        this.location = newLocation; 
    }
}

// New objects based on the class: 

let ryan = new Person("Ryan", "rburch");
ryan.setLocation("madison");
console.log(ryan);
//ryan.age - can't access, private
//ryan.location - can't access, protected

let bob = new Person("Bob", "bobby2");
bob.setLocation("LaCrosse");
console.log(bob);

// Unlike ES6, you set the property directly in the body rather than a constructor with the this keyword. 
// Private, can only be accessed(read/write) from inside the class, not from new instances.
// Protected, a child of this class would have access to the property, not from new instances. 
// New instances can access/read/write private and protected through public methods. 


// We can automatically create a property named username and make it public, also can avoid typing this keyword
// by passing it in the constructor, can also set a default value in the constructor too. 



// Inheritance with Extended / Child class 

class Max extends Person {
   // name: string = "Max";       // Will override the Person class even if passed to constructor 


    constructor(username: string) { // passing "Max57" from the instantiation, which is passed to the parent constructor 
        super("Max", username);  // passing "Max" to the parent constructor and passing "username" to the parent constructor
        this.location = "Viola"; // Location is accessible, but "age" is not because it's private. 
                                   // the properties and values are set even tho you cant see them in the child, like the location 
    }
}

let max = new Max("max57");
console.log(max);

// Max has all properties and methods from its parent. 
// When extending a class and use a constructor, you need to call super, which calls the constructor of the parent class 
// Remember the constructor is called when class is instantiated. 


// Getters & Setters 

class Plant {
    private _species: string = "Default";

    get species() {
        return this._species; 
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default"; 
        }
    }

}

let plant = new Plant();
console.log(plant.species); // refers to get species(), it's called like a property, not like a function 
plant.species = "ab"
console.log(plant.species) // will still return Default because it's less than three characters
plant.species = "Green Plant"; 
console.log(plant.species);

// Static Properties & Methods - useful for "helper" tools 

class HelpersExample {
    PI: number = 3.14;
}

console.log(2 * HelpersExample.PI) // does not work, Helpers is a class NOT an instance of that class. 


// However, we can use the property by adding the static keyword which makes it available without an instance. 

class Helpers {
   static PI: number = 3.14;
   static calcCircum(diameter: number): number {
       return diameter * this.PI; 
   }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(5)); // Can also make methods static 


// Abstract Classes - Can't be instantiated, must always be inherited from into children / extended classes 
// Useful because maybe it never needs to be instantiated, but provides a nice basic setup. 

abstract class Project {
    projectName: string = "Default";
    budget: number; 

    calcBudget() {
        return this.budget * 2;
    }

    abstract changeName(name: string): void; // Only define how the function should look like, put logic in child

}

class Renaissance extends Project {
    
    constructor(name: string, budget: number) { // can use constructor to set property values on intialization 
        super();                                    // no constructor in parent, no need to supply arguments 
        this.projectName = name;              //projectName property already exists, it's inherited
        this.budget = budget;                 // budget property already exists, it's inherited 
    }

    changeName(projectName: string): void {
        this.projectName = projectName; 
    }

}

let renaissance = new Renaissance("Project1", 2000);
renaissance.changeName("project2");
console.log(renaissance); 
console.log(renaissance.calcBudget())



// Assignment Exercise #1

class Car {
    constructor(public name: string, public acceleration: number = 0) {
        this.name =  name;
        this.acceleration = acceleration; 
    }

    honk(): void {
        console.log("Toooot!");
    }

    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW", 0);
console.log(car.acceleration); 
car.accelerate(10);
console.log(car.acceleration);


// Exercise #2

abstract class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super();
        this.width = width;
        this.length = length;
    }

    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise #3 


class Dog {
    _firstName: string = "";

    get name(): string {
        return this._firstName; 
    }

    set name(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = ""; 
        }
    }
}


const doggy = new Dog();
console.log(doggy.name); // refers to get method 
doggy.name = "Howard"             // refers to set method 
console.log(doggy.name);