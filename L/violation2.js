class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {

  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Here we can notice that Square is not compatible 
// with every function we use Rectangle for
function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5);
const rectangle2AsSquare = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);
increaseRectangleWidth(rectangle2AsSquare);

// you will notice here that it's represent 
console.log(rectangle1.area()); // 22
console.log(rectangle2.area()); // 30
console.log(rectangle2AsSquare.area()); // 36
