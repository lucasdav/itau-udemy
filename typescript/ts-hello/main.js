"use strict";
exports.__esModule = true;
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
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
var message2;
message2 = 'abc';
// let endsWithC = (<string>message2).endsWith('c');
// let alternativeWay = (message2 as string).endsWith('c');
//-----------------------------------------------------------------------
var doLog = function (message) {
    console.log(message);
};
var doLogWithArrowFunction = function (message) { return console.log(message); };
var doLogWithArrowFunction2 = function () { return console.log(); };
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
//-----------------------------------------------------------------------
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point2;
}());
//Abaixo é um objeto / Um objeto é uma instancia de uma classe
var point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();
//-----------------------------------------------------------------------
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point3;
}());
var point3 = new Point3(1, 2);
point3.draw();
//-----------------------------------------------------------------------
// Access Modifiers: 1-public, 2-private, 3-protected
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point4;
}());
var point4 = new Point4(1, 2);
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
var point_1 = require("./point");
var point6 = new point_1.Point6(1, 2);
point6.draw();
//-----------------------------------------------------------------------
// Exercise: Developing Like button of the Facebook
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
