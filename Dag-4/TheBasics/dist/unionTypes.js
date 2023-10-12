"use strict";
// Basic Union Type...
let modelYear;
modelYear = 2019;
modelYear = '2019';
modelYear = new Date('2017-01-01').getFullYear();
let coordinates = { x: 10, y: 10 };
coordinates = { lat: 100.02, long: 256.5 };
/***************************************************/
// Funktioner med Union typ argument...
function displayModelYear(modelYear) {
    console.log(`The vehicles modelyear is ${modelYear}`);
}
displayModelYear(2019);
displayModelYear('2019');
displayModelYear(new Date('2018-11-25').getFullYear());
/***************************************************/
// Union typer med listor
const coords = [];
coords.push({ x: 20, y: 20 });
coords.push({ lat: 20.5, long: 200.45 });
// Literals types...
let movieTypes;
movieTypes = 'Drama';
// movieTypes = 'Comedy'
