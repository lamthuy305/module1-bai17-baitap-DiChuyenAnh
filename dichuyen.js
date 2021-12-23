class Circle {
    _x;
    _y;
    _radius;
    _color;

    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    moveLeft() {
        this._x -= 20;
    }
    moveRight() {
        this._x += 20;
    }
    moveUp() {
        this._y -= 20;
    }
    moveDown() {
        this._y += 20;
    }
}