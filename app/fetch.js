const root = "https://jsonplaceholder.typicode.com/posts/1";

fetch(root, {
        method: "GET"
    }) //return a promise
    .then(response => response.json()) //return a promise
    .then(json => console.log(json));