interface Entity {
  name: string,
  attackDamage: number,
  health: number,

  move(): void,
  attack(targetEntity: Entity): void,
  takeDamage(amount: number): void
}

class Character implements Entity {
  name: string;
  attackDamage: number;
  health: number;

  constructor(name: string, attackDamage: number, health: number) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity: Entity) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount: number) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Wall implements Entity {
  name: string;
  attackDamage: number = null;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount: number) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }

  move() {
    return null;
  }

  attack() {
    return null;
  }
}

class Turret implements Entity {
  name: string;
  attackDamage: number;
  health: number = null; // using null because Turret can't be damaged so no health

  constructor(name: string, attackDamage: number) {
    this.name = name;
    this.attackDamage = attackDamage;
  }

  move() {
    return null;
  }

  attack(targetEntity: Entity) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage() {
    return null;
  }
}

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);