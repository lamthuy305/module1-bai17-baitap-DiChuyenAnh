class DrawImg {
    _x;
    _y;
    _image;

    constructor(x, y,image) {
        this._x = x;
        this._y = y;
        this._image = image;
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
    drawImage(ctx) {
        let image = new Image();
        image.src = this._image;
        image.onload = ()=>{
            ctx.drawImage(image, this._x, this._y, 100, 100);
        }
    }
}