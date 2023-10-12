"use strict";
// Funktioner med typade argument...
// const myFunction = (name: string, age: number) => { }
const myFunction = (name, age) => {
    console.log(`${name} - ${age}`);
};
// Funktioner med retur typ...
function sayHello(name) {
    const greeting = `Välkommen ${name}`;
    return greeting;
}
const square = (num) => {
    return num * num;
};
myFunction('Karl', 16);
console.log(sayHello('Michael'));
console.log(square(2));
// Implicit typ hantering...
const categories = ['action', 'drama', 'horror'];
categories.map((category) => {
    return category.toUpperCase;
});
// Void retur...
const printMovieInfo = (title) => {
    console.log(title);
};
const printMovie = (title) => {
    console.log(title);
    // return 123
};
// Returtypen Never...
const throwException = (errorMsg, errorCode) => {
    throw new Error();
};
function mainLoop() {
    while (true) {
        console.log('I am running forever...');
    }
}
