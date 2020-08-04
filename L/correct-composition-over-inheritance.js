// Liskov Substitution Principle defines that 
// objects of a superclass shall be replaceable with objects
// of its subclasses without breaking the application


// Ducks can swim too so we need to duplicate 
// the logic for swim() inside Duck class 
// because we can't extend more than one class
// Or we can use Composition over Inheritance

function swimmer() {
  return {
    swim: () => console.log('I can swim')
  }
}

function flyier() {
  return {
    fly: () => console.log('I can fly')
  }
}

function quackker() {
  return {
    quack: () => console.log('I can quack')
  }
}

function swimmingBirdCreator(name) {
  name = `The bird is: ${name}`;

  return {
    name,
    ...swimmer()
  }
}

function swimmingFlyingQuackkingBirdCreator(name) {
  name = `The bird is: ${name}`;

  return {
    name,
    ...flyier(),
    ...swimmer(),
    ...quackker()
  }
}

function makeBirdFly(flyingBird) {
  flyingBird.fly();
}

function makeBirdSwim(swimmingBird) {
  swimmingBird.swim();
}


const swimmingFlyingQuackkingBird = swimmingFlyingQuackkingBirdCreator('Duck');
console.log(swimmingFlyingQuackkingBird.name);
makeBirdFly(swimmingFlyingQuackkingBird);
makeBirdSwim(swimmingFlyingQuackkingBird);
swimmingFlyingQuackkingBird.quack();

console.log('');

const swimmingBird = swimmingBirdCreator('Penguin');
console.log(swimmingBird.name);
makeBirdSwim(swimmingBird);

