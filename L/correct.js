// Liskov Substitution Principle defines that 
// objects of a superclass shall be replaceable with objects
// of its subclasses without breaking the application

class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends SwimmingBird {
}

function makeBirdFly(flyingBird) {
  flyingBird.fly();
}

function makeBirdSwim(swimmingBird) {
  swimmingBird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

const flyingBird = new FlyingBird();
const swimmingBird = new SwimmingBird();

makeBirdFly(duck);
makeBirdSwim(penguin);

makeBirdFly(flyingBird);
makeBirdSwim(swimmingBird);