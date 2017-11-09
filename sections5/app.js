var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.name = "Ryan";
        this.age = 28;
        this.name = name;
    }
    Person.prototype.setLocation = function (newLocation) {
        this.location = newLocation;
    };
    return Person;
}());
// New objects based on the class: 
var ryan = new Person("Ryan", "rburch");
ryan.setLocation("madison");
console.log(ryan);
//ryan.age - can't access, private
//ryan.location - can't access, protected
var bob = new Person("Bob", "bobby2");
bob.setLocation("LaCrosse");
console.log(bob);
// Unlike ES6, you set the property directly in the body rather than a constructor with the this keyword. 
// Private, can only be accessed(read/write) from inside the class, not from new instances.
// Protected, a child of this class would have access to the property, not from new instances. 
// New instances can access/read/write private and protected through public methods. 
// We can automatically create a property named username and make it public, also can avoid typing this keyword
// by passing it in the constructor, can also set a default value in the constructor too. 
// Inheritance with Extended / Child class 
var Max = (function (_super) {
    __extends(Max, _super);
    // name: string = "Max";       // Will override the Person class even if passed to constructor 
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.location = "Viola"; // Location is accessible, but "age" is not because it's private. 
        return _this;
        // the properties and values are set even tho you cant see them in the child, like the location 
    }
    return Max;
}(Person));
var max = new Max("max57");
console.log(max);
// Max has all properties and methods from its parent. 
// When extending a class and use a constructor, you need to call super, which calls the constructor of the parent class 
// Remember the constructor is called when class is instantiated. 
// Getters & Setters 
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // refers to get species(), it's called like a property, not like a function 
plant.species = "ab";
console.log(plant.species); // will still return Default because it's less than three characters
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods - useful for "helper" tools 
var HelpersExample = (function () {
    function HelpersExample() {
        this.PI = 3.14;
    }
    return HelpersExample;
}());
console.log(2 * HelpersExample.PI); // does not work, Helpers is a class NOT an instance of that class. 
// However, we can use the property by adding the static keyword which makes it available without an instance. 
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return diameter * this.PI;
    };
    return Helpers;
}());
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(5)); // Can also make methods static 
// Abstract Classes - Can't be instantiated, must always be inherited from into children / extended classes 
// Useful because maybe it never needs to be instantiated, but provides a nice basic setup. 
var Project = (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var Renaissance = (function (_super) {
    __extends(Renaissance, _super);
    function Renaissance(name, budget) {
        var _this = _super.call(this) || this;
        _this.projectName = name; //projectName property already exists, it's inherited
        _this.budget = budget; // budget property already exists, it's inherited 
        return _this;
    }
    Renaissance.prototype.changeName = function (projectName) {
        this.projectName = projectName;
    };
    return Renaissance;
}(Project));
var renaissance = new Renaissance("Project1", 2000);
renaissance.changeName("project2");
console.log(renaissance);
console.log(renaissance.calcBudget());
// Assignment Exercise #1
var Car = (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log("Toooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW", 0);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise #2
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise #3 
var Dog = (function () {
    function Dog() {
        this._firstName = "";
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
var doggy = new Dog();
console.log(doggy.name); // refers to get method 
doggy.name = "Howard"; // refers to set method 
console.log(doggy.name);
