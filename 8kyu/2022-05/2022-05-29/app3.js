/* CHALLENGE

Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

*/

/* EXAMPLE

  var cat = new Cat('Mr Whiskers');
  cat.speak(),'Mr Whiskers meows.'

  cat = new Cat('Lamp');
  cat.speak(),'Lamp meows.'

  cat = new Cat('$$Money Bags$$');
  cat.speak(),'$$Money Bags$$ meows.'

*/

// ANSWER

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`
    }
}

console.log(Animal)