class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}

class Square extends Shape {

  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = width;
    this.height = height;
  }
}

// Here we can notice that Square is not compatible 
// with every function we use Rectangle for because
// set width in square sets height too and the opposite
function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5, 5);


increaseRectangleWidth(rectangle);
increaseRectangleWidth(square);

// you will notice here that it's represent 
console.log(rectangle.area()); // 22
console.log(square.area()); // 36
