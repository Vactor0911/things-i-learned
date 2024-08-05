class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) { // Setter
        if (newWidth <= 0) {
            console.error("Width must be greater than 0");
        }
        else {
            this._width = newWidth;
        }
    }

    get width() { // Getter
        return this._width;
    }
}

const rect = new Rectangle(100, 200);
console.log(rect.width); // 100
rect.width = 50;
console.log(rect.width); // 50

console.log(rect);