// Objekt som funktionsargument...
function printMovieInfo(movie: { title: string; releaseYear: number }): void {
  console.log(`${movie.title} - ${movie.releaseYear}`);
}

printMovieInfo({ title: 'The Equalizer 3', releaseYear: 2023 });

const movie = { title: 'Taken', releaseYear: 2008 };
printMovieInfo(movie);

// Använda type nyckelordet för att beskriva en typ...
type Movie = {
  title: string;
  releaseYear: number;
  director: string;
};

const batmanBegins: Movie = {
  title: 'Batman Begins',
  releaseYear: 2005,
  director: 'Christopher Nolan',
};

function displayMovieInfo(movie: Movie): void {
  console.log(`${movie.title} - ${movie.director} - ${movie.releaseYear}`);
}

displayMovieInfo(batmanBegins);

type Vehicle = {
  readonly id: number;
  registrationNumber: string;
};

const volvo: Vehicle = {
  id: 1,
  registrationNumber: 'ABC123',
};

// Går ej att ändra...
// volvo.id = 14;

type Car = {
  color: string;
};

// Intersection Types...
type VehicleGearType = {
  numberOfGears: number;
};

type SuperCar = Vehicle & Car & VehicleGearType;
type SuperDuperCar = Vehicle & Car & VehicleGearType & { horsePower: number };

const mySuperCar: SuperCar = {
  id: 2,
  registrationNumber: 'ABC123',
  color: 'White',
  numberOfGears: 6,
};

const mySuperDuperCar: SuperDuperCar = {
  id: 2,
  registrationNumber: 'ABC123',
  color: 'White',
  numberOfGears: 6,
  horsePower: 1000,
};
