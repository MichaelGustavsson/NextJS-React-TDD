// Explicit typ annotering...
let movieTitle: string;
let movieLength: number;
let isCategoryAction: boolean;

movieTitle = 'The Equalizer 3';
movieLength = 94;
isCategoryAction = true;

// movieTitle = 123;
// movieLength = '94';
// isCategoryAction = 'true';

/***********************************************************/
// Implicit typ annotering... (type inference)
let tvSerie = 'La Brea';
let isDrama = true;

// tvSerie = 123;
// isDrama = "false";

/***********************************************************/
// Any type...
// AKTA ER FÖR ATT ANVÄNDA ANY, OM DET INTE ÄR ABSOLUT NÖDVÄNDIGT!
let director: any = 'Christopher Nolan';
director = 10;
director = true;
director();
director.toUpperCase();
