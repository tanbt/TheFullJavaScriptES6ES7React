//document.getElementsByTagName("body")[0].innerHTML = "Hello from Webpack";
// alert("Hello from Webpack");
let w = 100;
w += 200;

{
    let w = 'word';
    console.log(w);
}

//console.log(`Hello, ${w}`);

let a = [20, 'xyz', 40];
let b = [10, ...a, 50];
//console.log(b);

function collect(...a) {
    //    console.log(a);
};
//collect(1, 3, 4, 5);

let z = [4, 5, 6];
let [first, second] = z; // match by index from left
//console.log(first, second);

let king = { name: 'Tan Bui', level: 'expert' };
let { name, level } = king; // match by properties naming
//console.log(name, level);

let son = { pro1: 'val1', pro2: 'val2' };
let pro1, pro2; // pre-defined variables
({ pro1, pro2 } = son); // wrap () to use pro1, pro2 from global scope
//console.log(pro1, pro2);

//setTimeout(() => { console.log("Woohoo!") }, 3000);

let values = [10, 20, 40];
let double = (n) => { return n * 2 };
let doubled_values = values.map(double);
let trible_values = values.map((v) => { return v * 3 });
let exp_values = values.map((v) => v * v);
//console.log(doubled_values, trible_values, exp_values);

let points = [5, 2, 9, 8, 16, 25];
let odds = points.filter((n) => n % 2 == 1);
//console.log(odds);

////////////////////// CLASS /////////////////

import { data, add, Animal, Wizard } from "./mymodule";
//console.log(data, add(55, 66));

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    hello() {
        super.hello();
        console.log(`I'm ${this.color}.`);
    }
}

let lion = new Lion("Simba", 2, "golden");
lion.hello();
Animal.rock();

let harry = new Wizard("Harri porter", "House", "Owl");
harry.pet_name = "More pet";
//console.log(harry, harry.info());

///////////// DATA STRUCTURE ////////////
let aSet = new Set();
aSet.add(3);
aSet.add("a string");
aSet.add({ x: 123, y: 456 });

let aSetArray = new Set([1, 2, "array element"]);
//console.log(aSet, points);

let myMap = new Map();
let k1 = "string key";
let k2 = { a: 'key' };
let k3 = () => { console.log("This is a function key.") };

myMap.set(k1, 'value of string key');
myMap.set(k2, 'value of object key');
myMap.set(k3, 'value of funcion key');

let numArr = [
    [1, 'one'],
    [2, 'two']
]
let arrMap = new Map(numArr);

for (let [key, value] of arrMap.entries()) {
    // console.log(`${key} to ${value}`);
}

//import { MyClosure } from "./myclosure";
import {} from "./mygenerator";