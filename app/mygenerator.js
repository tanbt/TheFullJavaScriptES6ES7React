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