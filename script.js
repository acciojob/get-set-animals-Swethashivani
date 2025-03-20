// Base Animal class
class Animal {
    constructor(species) {
        this._species = species; // Use a private variable
    }

    get species() {
        return this._species; // Corrected getter
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Dog class inheriting from Animal
class Dog extends Animal {
    bark() {
        console.log(`woof`);
    }
}

// Cat class inheriting from Animal
class Cat extends Animal {
    purr() {
        console.log(`purr`);
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
