class Bird {
  fly() {
    console.log('I can fly');
  }
}

class Duck extends Bird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("I can't fly");
  }

  swim() {
    console.log('I can swim');
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();


makeBirdFly(duck);
makeBirdSwim(penguin);

makeBirdFly(penguin);
// Penguins can't fly so this will throw an error
// we need another way to present Bird class
// like declaring two different classes for each bird type by abilities
