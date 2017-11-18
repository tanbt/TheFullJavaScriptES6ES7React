import 'babel-polyfill';

let obj = { a: "one", b: "two", c: "three" };
//console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));

async function async_one() {
    return "one";
}
async function async_two() {
    let rand = Math.floor(Math.random() * 10);
    if (rand % 2 == 0) {
        return "two";
    } else {
        throw new Error('Issue with async');
    }
}
//async_one().then(res => console.log(res));
//async_two().then(res => console.log(res)).catch(err => console.log(err));
async function async_three() {
    const one = await async_one(); //avoid using await
    console.log(one);
    const two = await async_two();
    console.log(two);
}

async function async_four() {
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_two()]
    )
    console.log(res_one, res_two);
}