// Завдання 1.1: Додавання методів до об'єктів car1 і car2
const car1 = {};
car1.drive = function () {
    console.log("I am not driving at night");
};

const car2 = {};
car2.drive = function () {
    console.log("I can drive anytime");
};

car1.drive();
car2.drive();

// Завдання 1.2: Створення класу Truck з методом AssignDriver
class Truck {
    constructor(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;

        // Додавання методу trip
        this.trip = function () {
            if (!this.driver) {
                console.log("No driver assigned");
            } else {
                const { name, nightDriving, experience } = this.driver;
                console.log(
                    `Driver ${name} ${
                        nightDriving ? "drives at night" : "does not drive at night"
                    } and has ${experience} years of experience.`
                );
            }
        };
    }

    static AssignDriver(truck, name, nightDriving, experience) {
        truck.driver = { name, nightDriving, experience };
    }
}

const truck1 = new Truck("red", 5000, 60.5, "Ford", "F-150");
const truck2 = new Truck("blue", 4500, 55, "Chevrolet", "Silverado");

Truck.AssignDriver(truck1, "John Doe", true, 5);
truck1.trip(); // Output: Driver John Doe drives at night and has 5 years of experience.

truck2.trip(); // Output: No driver assigned.

// Завдання 1.3: Клас Square з методами
class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a quadrilateral with all sides equal and all angles 90°.");
    }

    length() {
        console.log(`Perimeter: ${4 * this.a}`);
    }

    square() {
        console.log(`Area: ${this.a ** 2}`);
    }

    info() {
        console.log(
            `Square Info:
            - Side length: ${this.a}
            - All angles: 90°
            - Perimeter: ${4 * this.a}
            - Area: ${this.a ** 2}`
        );
    }
}

const square = new Square(5);
Square.help();
square.info();

// Завдання 1.4: Успадкування Rectangle від Square
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and all angles 90°.");
    }

    length() {
        console.log(`Perimeter: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Area: ${this.a * this.b}`);
    }

    info() {
        console.log(
            `Rectangle Info:
            - Length: ${this.a}
            - Width: ${this.b}
            - All angles: 90°
            - Perimeter: ${2 * (this.a + this.b)}
            - Area: ${this.a * this.b}`
        );
    }
}

const rectangle = new Rectangle(6, 4);
Rectangle.help();
rectangle.info();

// Завдання 1.5: Успадкування Rhombus від Square
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus is a quadrilateral with all sides equal and opposite angles equal.");
    }

    length() {
        console.log(`Perimeter: ${4 * this.a}`);
    }

    square() {
        console.log(`Area: ${this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)}`);
    }

    info() {
        console.log(
            `Rhombus Info:
            - Side length: ${this.a}
            - Angles: α = ${this.alpha}°, β = ${this.beta}°
            - Perimeter: ${4 * this.a}
            - Area: ${
                this.a ** 2 * Math.sin((this.alpha * Math.PI) / 180)
            }`
        );
    }
}

const rhombus = new Rhombus(5, 120, 60);
Rhombus.help();
rhombus.info();

// Завдання 1.6: Успадкування Parallelogram від Rectangle
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides parallel and equal.");
    }

    square() {
        console.log(`Area: ${this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)}`);
    }

    info() {
        console.log(
            `Parallelogram Info:
            - Length: ${this.a}
            - Width: ${this.b}
            - Angles: α = ${this.alpha}°, β = ${this.beta}°
            - Perimeter: ${2 * (this.a + this.b)}
            - Area: ${
                this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
            }`
        );
    }
}

const parallelogram = new Parallelogram(6, 4, 120, 60);
Parallelogram.help();
parallelogram.info();

// Завдання 1.7: Triangular
function Triangular({ a = 3, b = 4, c = 5 } = {}) {
    return { a, b, c };
}

const triangle1 = Triangular();
const triangle2 = Triangular({ a: 5, b: 12, c: 13 });
const triangle3 = Triangular({ a: 6, b: 8, c: 10 });

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

// Завдання 1.8: PiMultiplier
function PiMultiplier(multiplier) {
    return function () {
        return Math.PI * multiplier;
    };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyByTwoThirds = PiMultiplier(2 / 3);
const divideBy2 = PiMultiplier(1 / 2);

console.log(multiplyBy2());
console.log(multiplyByTwoThirds());
console.log(divideBy2());

// Завдання 1.9: Painter
function Painter(color) {
    return function (object) {
        if (object.type) {
            console.log(`Object type: ${object.type}, Color: ${color}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
