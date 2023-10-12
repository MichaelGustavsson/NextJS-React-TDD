// Funktioner med typade argument...
// const myFunction = (name: string, age: number) => { }
const myFunction = (name: string, age: number): void => {
  console.log(`${name} - ${age}`);
};

// Funktioner med retur typ...
function sayHello(name: string): string {
  const greeting = `Välkommen ${name}`;
  return greeting;
}

const square = (num: number): number => {
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
const printMovieInfo = (title: string) => {
  console.log(title);
};

const printMovie = (title: string): void => {
  console.log(title);
  // return 123
};

// Returtypen Never...
const throwException = (errorMsg: string, errorCode: number): never => {
  throw new Error();
};

function mainLoop(): never {
  while (true) {
    console.log('I am running forever...');
  }
}
