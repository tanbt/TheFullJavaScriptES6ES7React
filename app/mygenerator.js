import 'babel-polyfill';

function* letterMaker() {
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

function* countMaker() {
    let id = 0;

    while (id < 2) {
        yield id += 1;
    }
}
let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);

function* idMaker() {
    var index = 0;
    while (true) {
        index++;
        let reset = yield index;
        if (reset) {
            index = 0;
        }
    }
}

var gen = idMaker();

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next(true).value); // 1

// function* arrayIterator() {
//     for (let arg of arguments) {
//         yield arg;
//     }
// }

function* arrayIterator() {
    yield* arguments; // ES6 creates yield for each item in array
}
let ite = arrayIterator(1, "two", 3);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);