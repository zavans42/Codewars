/* CHALLENGE

Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
You are then given a working class Labrador as your initial code.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Shorten it so that it meets the strict character count requirements for this Kata.
*/

// ANSWER

class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender)
        this.species = "Labrador";
        this.legs = 4;
        this.size = "Large";
        this.loyal = true;
        this.master = master;
    }
}