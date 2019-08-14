export class Point6 {
    constructor(private _x?: number, private _y?: number) {
    }

    public draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y)
    }
}