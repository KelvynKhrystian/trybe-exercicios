class Dog {
  name: string;
  age: number;
  race?: string

  constructor(name: string, age: number, race?: string) {
    this.name = name;
    this.age = age;
    this.race = race;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }
}

const dog1 = new Dog("Luffynho", 1, "pitbull" );
console.log(dog1);
dog1.speak()
