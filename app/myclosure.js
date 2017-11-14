let call = () => {
    let secret = 'ES6 rocks!';
    let reveal = () => {
        console.log(secret);
    }
    return reveal;
}

//let unveil = call();
//unveil(); 

const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}
let add_ness = addSuffix("ness");
//console.log(add_ness("happi"));

const product = (x) => {
    return y => y * x;
}
const product_short = x => y => y * x;

//console.log(product(3)(5), product_short(3)(8));

const account = () => {
    let balance = 0;    //a private value
    let changeBalance = (val) => {
        return balance += val;
    }

    const deposit20 = () => changeBalance(20);
    const check = () => balance;

    // this return will be seen from Console
    return {
        deposit20: deposit20,
        check: check
    }
    // short: return { deposit20, check}
}
let wallet = account();
wallet.deposit20();
console.log(wallet.check(), wallet.balance);