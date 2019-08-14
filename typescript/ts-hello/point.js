"use strict";
exports.__esModule = true;
var Point6 = /** @class */ (function () {
    function Point6(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point6.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    return Point6;
}());
exports.Point6 = Point6;
