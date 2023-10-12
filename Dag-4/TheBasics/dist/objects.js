"use strict";
// Objekt som funktionsargument...
function printMovieInfo(movie) {
    console.log(`${movie.title} - ${movie.releaseYear}`);
}
printMovieInfo({ title: 'The Equalizer 3', releaseYear: 2023 });
const movie = { title: 'Taken', releaseYear: 2008 };
printMovieInfo(movie);
const batmanBegins = {
    title: 'Batman Begins',
    releaseYear: 2005,
    director: 'Christopher Nolan',
};
function displayMovieInfo(movie) {
    console.log(`${movie.title} - ${movie.director} - ${movie.releaseYear}`);
}
displayMovieInfo(batmanBegins);
const volvo = {
    id: 1,
    registrationNumber: 'ABC123',
};
const mySuperCar = {
    id: 2,
    registrationNumber: 'ABC123',
    color: 'White',
    numberOfGears: 6,
};
const mySuperDuperCar = {
    id: 2,
    registrationNumber: 'ABC123',
    color: 'White',
    numberOfGears: 6,
    horsePower: 1000,
};
