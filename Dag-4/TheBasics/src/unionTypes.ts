// Basic Union Type...
let modelYear: number | string;
modelYear = 2019;
modelYear = '2019';
modelYear = new Date('2017-01-01').getFullYear();

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 10, y: 10 };
coordinates = { lat: 100.02, long: 256.5 };

/***************************************************/
// Funktioner med Union typ argument...
function displayModelYear(modelYear: number | string): void {
  console.log(`The vehicles modelyear is ${modelYear}`);
}

displayModelYear(2019);
displayModelYear('2019');
displayModelYear(new Date('2018-11-25').getFullYear());

/***************************************************/
// Union typer med listor
const coords: (Point | Loc)[] = [];
coords.push({ x: 20, y: 20 });
coords.push({ lat: 20.5, long: 200.45 });

// Literals types...
let movieTypes: 'Action' | 'Drama' | 'Horror';

movieTypes = 'Drama';
// movieTypes = 'Comedy'
