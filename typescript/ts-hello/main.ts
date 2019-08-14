function log(message) {
    console.log(message);
}

var message = 'Hello World';

log(message);

//-----------------------------------------------------------------------

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;

let message2: string;
message2 = 'abc';
// let endsWithC = (<string>message2).endsWith('c');
// let alternativeWay = (message2 as string).endsWith('c');

//-----------------------------------------------------------------------

let doLog = function(message) {
    console.log(message);
}

let doLogWithArrowFunction = (message) => console.log(message);

let doLogWithArrowFunction2 = () => console.log();

//-----------------------------------------------------------------------

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    //...
}

drawPoint({
    x: 1,
    y: 2
});

//-----------------------------------------------------------------------

class Point2 {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

//Abaixo é um objeto / Um objeto é uma instancia de uma classe
let point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();

//-----------------------------------------------------------------------

class Point3 {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point3 = new Point3(1, 2);
point3.draw();

//-----------------------------------------------------------------------

// Access Modifiers: 1-public, 2-private, 3-protected

class Point4 {
    constructor(private x?: number, private y?: number) {
    }

    public draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point4 = new Point4(1, 2);
point4.draw();

//-----------------------------------------------------------------------

// Properties

// class Point5 {
//     constructor(private _x?: number, private _y?: number) {
//     }

//     public draw() {
//         console.log('X: ' + this._x + ', Y: ' + this._y)
//     }

//     get x() {
//         return this._x;
//     }

//     set x(value) {
//         if (value < 0)
//             throw new Error('value cannot be less than 0');
        
//         this._x = value;
//     }
// }

// let point5 = new Point5(1, 2);
// let x = point5.x;
// point5.x = 10;
// point5.draw();

//-----------------------------------------------------------------------

// Module

import { Point6 } from './point';

let point6 = new Point6(1, 2);
point6.draw();

//-----------------------------------------------------------------------

// Exercise: Developing Like button of the Facebook

import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);