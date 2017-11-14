const data = ["aaa", 124, "bbb"];
const add = (a, b) => a + b;

class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hi, I'm ${this.name} from Animal`);
    }
    static rock() {
        console.log(`We will rock you!`);
    }
}

function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}.`
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() { // cannot use Arrow function syntax here
    return `I have a ${this.pet} named ${this.pet_name}.`
}

export { data, add, Animal, Wizard };