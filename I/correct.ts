interface Entity {
  name: string
}

interface IMover {
  move(): void
}

interface IAttacker {
  attackDamage: number,
  attack(targetEntity: Entity & IDamageTacker): void,
}

interface IDamageTacker {
  health: number,
  takeDamage(amount: number): void
}

class Character implements Entity, IMover, IAttacker, IDamageTacker {
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

  attack(targetEntity: Entity & IDamageTacker) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount: number) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Wall implements Entity, IDamageTacker {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount: number) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Turret implements Entity, IAttacker {
  name: string;
  attackDamage: number;

  constructor(name: string, attackDamage: number) {
    this.name = name;
    this.attackDamage = attackDamage;
  }

  attack(targetEntity: Entity & IDamageTacker) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }
}

const turret = new Turret('Turret', 5);
const character = new Character('Character', 3, 100);
const wall = new Wall('Wall', 200);

turret.attack(character);
character.move();
character.attack(wall);