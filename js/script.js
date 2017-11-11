var myvar = 20;
var name = "myvar";
console.log(eval(name));

//// OBJECT
var dog = {
    name: 'buddy',
    breed: 'golden retriever',
    weight: 60,

    bark: () => {
        console.log(dog.name)   //access self property
    }
};
dog.bark();
// console.log(dog);
// console.log(window.name);

//// ARRAY
var points = [12, 34, 'a var', {your_type: 'a object', your_value: 'a value'}, 43];
points.push('pushed item');
var last = points.pop();
console.log(points, last, points[0], points.length);