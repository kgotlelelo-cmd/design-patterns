// shapes
// Area, Perimeter
// simple - single function calculateTotal Area

interface shape {
    area(): number;
    perimeter(): number;
}

class Circle implements shape {
    constructor(private radius: number){}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI;
    }
}

class Rectangle implements shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width+this.height);
    }
}

function calculateTotalArea(shape): number {
    return shape.area();
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4,6);

console.log(calculateTotalArea(circle));