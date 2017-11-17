let aSuccessPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve promise data'); // run in background
    }, 2000);

});
aSuccessPromise.then(response => console.log(response));

let aFailedPromise = new Promise((resolve, reject) => {
    reject('Rejected promise data');
});
aFailedPromise.catch(error => console.log(error));